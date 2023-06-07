import React from "react";
import Table from "./Table";
import { products } from "@/data";

const ProductInfo = () => {
  return (
    <article className="flex justify-between gap-10">
      <div>
        {products.map((product) => {
          return (
            <Table info={product.general} title="General" key={product.name} />
          );
        })}
      </div>
      <div>
        {products.map((product) => {
          return (
            <Table
              info={product.ProductDetails}
              title="Product Details"
              key={product.name}
            />
          );
        })}
      </div>
    </article>
  );
};

export default ProductInfo;
