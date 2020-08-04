import React ,{Component}  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Picture from "/home/bhumika/Desktop/TEST/test-app/src/landscape.jpg";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { auth } from "./FIREBASE_CONFIGURATION";
import { connect } from "react-redux";
// import SINGUP from "./SINGHUP"
// import PropTypes from 'prop-types'

import { signinWithGoogle } from "./FIREBASE_CONFIGURATION";
import { userprofile } from "./FIREBASE_CONFIGURATION";
import { Link } from 'react-router-dom';
import { Redirect} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




class Materialuisign extends Component {
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

  LOGIN = async (event) => {
    await event.preventDefault();
    try {
      const user = await auth.signInWithEmailAndPassword(
        this.state.Email,
        this.state.Password
      );

      await userprofile(user);

      this.setState({
        Email: "",
        Password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
 
    return (
      <div>
        {this.props.user === null ? (
          <div
            style={{
              display: "flex",
              maxWidth: "900px",
              border: "1px solid black",
              margin: "100px auto 0px auto",
            }}
          >
            <div style={{ width: "50%" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={Picture}
                alt=""
              />
            </div>

            <Container style={{ width: "50%" }} component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <form className={classes.form} noValidate>
                  <TextField
                    onChange={this.change}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="Email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    onChange={this.change}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="Password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="button"
                    onClick={this.LOGIN}
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Sign In
                  </Button>
                  <Button
                    style={{ marginTop: "15px" }}
                    type="button"
                    onClick={signinWithGoogle}
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    SINGH IN WITH GOOGLE
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link to="SINGHUP_PAGE">New</Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
              <Box mt={8}>
                <Copyright />
              </Box>
            </Container>
          </div>
        ) : (
          <Redirect to={"/"} />
        )}
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    user: state.LOGIN_REDUCER.user,
  };
};


export default connect(mapStateToprops, null)(Materialuisign);






