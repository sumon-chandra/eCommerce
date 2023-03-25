import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2aca2883ccmsha30c691d132f478p12d213jsnd28011583fd9",
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    };

    fetch(
      `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_all&concepts=H%26M MAN&country=us&lang=en&currentpage=1&pagesize=10`,
      options
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
