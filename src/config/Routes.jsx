/* eslint-disable no-unused-vars */
import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

import Details from "../pages/Details";

import Catalog from "../pages/Catalog";

export default function Routers() {
  return (
    <>
    <Routes>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:keyword" component={Details} />
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/" component={Home} />
    </Routes>

    </>
  );
}
