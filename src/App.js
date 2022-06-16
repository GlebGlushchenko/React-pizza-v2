import React from "react";

import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./components/NotFoundBlock";

export const SearchContex = React.createContext();

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      <div className={"wrapper"}>
        <SearchContex.Provider value={{ searchValue, setSearchValue }}>
          <Header />
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
        </SearchContex.Provider>
      </div>
    </>
  );
};

export default App;
