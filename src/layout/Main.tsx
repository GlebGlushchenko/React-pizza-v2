import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";

export const Main:React.FC = () => {
  return (
    <div className={"wrapper"}>
      <Header />
      <main className="content">
        <div className="container">
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Main;
