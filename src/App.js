import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/app.scss";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Modal from "./components/ModalWindow";

export const SearchContex = React.createContext();

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      {/* <Modal /> */}
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
