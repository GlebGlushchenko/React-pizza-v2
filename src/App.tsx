import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./components/NotFoundBlock/NotFoundInfo";
import FullPizza from "./components/PizzaBlock/FullPizza/FullPizza";
import Main from "./layout/Main";
import { useSelector } from "react-redux";
import { pizzaSelector } from "./redux/slices/pizza/selector";

const App = () => {
  const { status } = useSelector(pizzaSelector);
  const redirect = () => {
    alert("Что то пошло не так");
    return <NotFound />;
  };
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={status === "error" ? redirect() : <FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
