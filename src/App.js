import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/app.scss";
import Home from "./components/pages/Home";

const App = () => {
  const [pizzas, setPizza] = React.useState([]);
  const [category, setCategory] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    console.log(123);
    fetch("https://62a30a6421232ff9b2169b1b.mockapi.io/items")
      .then((response) => response.json())
      .then((json) => {
        setPizza(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <main className="content">
          <div className="container">
            <Home pizzas={pizzas} isLoading={isLoading} setCategory={setCategory} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
