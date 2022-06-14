import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/app.scss";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <main className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
