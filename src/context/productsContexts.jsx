import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2aca2883ccmsha30c691d132f478p12d213jsnd28011583fd9",
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    };

    fetch(
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list?lang=en&country=us",
      options
    )
      .then((response) => response.json())
      .then((response) => setCategories(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <ProductsContext.Provider value={{ categories }}>
      {children}
    </ProductsContext.Provider>
  );
};
