import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
BrowserRouter as Router
} from 
"react-router-dom"

import { Provider } from "react-redux";
import { createStore } from "redux";
import Combinereducer from "./Redux/combinereduce";
import REducerb from  "./Redux/redux.reducer"
const Store = createStore(
Combinereducer
);




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={Store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
