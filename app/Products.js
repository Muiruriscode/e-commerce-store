import React from "react";
import ProductItem from "./ProductItem";

const Products = ({ product }) => {
  return (
    <article className="shadow-lg rounded-lg overflow-hidden w-52">
      <ProductItem product={product} />
    </article>
  );
};

export default Products;
