import React, { useContext } from "react";
import { ProductsContext } from "../context/productsContexts";
const Categories = () => {
  const { categories } = useContext(ProductsContext);

  const LoadCategory = ({ category }) => {
    return (
      <div>
        <p>{category.CatName}</p>
      </div>
    );
  };
  return (
    <div>
      <p>Categories</p>
      <div>
        {categories.map((category) => (
          <LoadCategory key={category.CatName} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
