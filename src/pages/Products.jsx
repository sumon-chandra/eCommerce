import React, { useContext, useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { ProductsContext } from "../context/productsContexts";

const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
    <>
      <p>Products List</p>
      {products.map((product) => (
        <ProductDetails key={product.code} product={product} />
      ))}
    </>
  );
};

export default Products;
