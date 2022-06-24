import React from "react";

import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./components/NotFoundBlock";
import FullPizza from "./pages/FullPizza";
import Main from "./layout/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
