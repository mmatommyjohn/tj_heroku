import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import Router from "./routers/Router";
import configureStore from "./store/configureStore";

import "normalize.css/normalize.css";
import "./styles/styles.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
