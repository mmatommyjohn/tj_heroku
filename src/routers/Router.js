import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Header from "../components/Header";
import Home from "../components/Home";
import NotFound from '../components/NotFound';

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/home" component={Home} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;