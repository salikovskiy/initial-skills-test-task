import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as firebase from "firebase";
import firebaseConfig from "./config/firebase.config";

firebase.initializeApp(firebaseConfig);
console.log(firebase);
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
