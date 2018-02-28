import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Header from "../components/Header";
import Mark from "../components/Mark";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Category from "../components/Category";
import Product from "../components/Product";
import Custom from "../components/Custom";
import Cart from "../components/Cart";

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Mark} exact={true} />
        <Route path="/home" component={Home} exact={true} />
        <Route path="/category" component={Category} />
        <Route path="/product" exact component={Product} />
        <Route path="/custom" exact component={Custom} />
        <Route path="/cart" exact component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
