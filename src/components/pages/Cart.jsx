import React from "react";
import Header from "../Header";

import cartImg from "../../assets/img/empty-cart.png";

export const Cart = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>
              Корзина пустая <icon>😕</icon>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartImg} alt="Empty cart" />
            <a href="/" className="button button--black">
              <span>Вернуться назад</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
