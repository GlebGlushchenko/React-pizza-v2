import React from "react";

import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./components/NotFoundBlock";

const App = () => {
  return (
    <>
      <div className={"wrapper"}>
        <Header />
        <main className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
