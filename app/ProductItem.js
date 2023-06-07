"use client";
import Image from "next/image";
import React from "react";
import { useGlobalContext } from "./context";
import { useRouter } from "next/navigation";

const ProductItem = ({ product }) => {
  const { addItem } = useGlobalContext();
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.push(`/products/product/${product.id}?id=${product.id}`);
        }}
        className="w-full h-36 relative overflow-hidden"
      >
        <Image src="/hero.jpg" fill style={{ objectFit: "cover" }} />
      </button>
      <div className="px-2">
        <div className="font-semibold flex justify-between my-1 text-zinc-700">
          <h4 className="text-md">{product.name}</h4>
          <p className="text-sm">${product.price}</p>
        </div>
        <p className="text-xs text-zinc-400 leading-4 ">{product.details}</p>
        <div className="flex justify-between">
          <p className="my-1 text-zinc-400">{product.rating}</p>
          <p className=" text-md my-1 text-red-600 line-through">
            {product?.deal}
          </p>
        </div>
        <button
          onClick={() => addItem(product)}
          className="text-md inline-block px-2 py-1 mb-2 shadow-md border-2 rounded-md font-semibold text-zinc-600"
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductItem;
