/* eslint-disable no-unused-vars */
import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";

import Details from "../pages/Details";

import Catalog from "../pages/Catalog";

export default function Routes() {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:keyword" component={Details} />
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
