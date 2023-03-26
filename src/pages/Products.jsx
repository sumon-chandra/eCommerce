import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const { catName } = useParams();
  return (
    <div>
      <p>
        Products of <span className="text-yellow-400 font-bold">{catName}</span>{" "}
        Category
      </p>
    </div>
  );
};

// export const categoryLoader = ({ params }) => {

// }

export default Products;
