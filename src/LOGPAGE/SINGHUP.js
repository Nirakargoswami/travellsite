import React, { Component } from "react";
import { auth } from "./FIREBASE_CONFIGURATION";
import { userprofile } from "./FIREBASE_CONFIGURATION";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link }from  "react-router-dom" ;
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { signinWithGoogle } from "./FIREBASE_CONFIGURATION";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const classes = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class SINGHUP_PAGE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      Disaplayname: "",
    };
  }
  change = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  Singhup = async (event) => {
    event.preventDefault();

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        this.state.Email,
        this.state.Password
      );
      const name = this.state.Disaplayname;
      await userprofile(user, { name });
    } catch (error) {
      console.log(error);
    }
    this.setState({
      Email: "",
      Password: "",
      Disaplayname: "",
    });
  };

  render() {
    return (
      <div style={{ margin: "80px auto 0px auto " }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Button
                   
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={signinWithGoogle}
                  >
                    Sign Up with Google
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="Disaplayname"
                    onChange={this.change}
                    variant="outlined"
                    required
                    fullWidth
                    label="Disaplay  name"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={this.state.Email}
                    onChange={this.change}
                    type="text"
                    name="Email"
                    variant="outlined"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={this.state.Password}
                    type="password"
                    name="Password"
                    onChange={this.change}
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.Singhup}
              >
                Sign Up
              </Button>
              <Grid container style={{ marginTop: "10px" }} justify="center">
                <Grid
                  style={{ textAlign: "center", border: "1px solid black" }}
                  item
                >
                  <Link to="/LOGINPAGE">Already have a account</Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}

export default SINGHUP_PAGE;
