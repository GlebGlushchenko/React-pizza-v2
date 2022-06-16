const url = `https://62a30a6421232ff9b2169b1b.mockapi.io/items?`;
export const api = {
  getPizzas: (setPizzas, setIsLoading) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
  },
};
