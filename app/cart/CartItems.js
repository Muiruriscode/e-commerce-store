import Image from "next/image";
import React, { useEffect } from "react";

import { useGlobalContext } from "@/app/context";
import CartItem from "./CartItem";

const CartItems = ({ cartItem, setCost }) => {
  const { cart } = useGlobalContext();

  // const { name, details, price, rating, colors, stock, count } =
  //   useGlobalContext().cart[0];
  // useEffect(() => {
  //   setCost((prev) => prev + count * price);
  // }, []);

  return (
    <>
      {cart.map((cartItem, index) => {
        return (
          <div
            className=" flex justify-between h-fit items-center shadow-md border mt-5 py-2 px-5 w-full"
            key={index}
          >
            <CartItem cartItem={cartItem} index={index} />
          </div>
        );
      })}
    </>
  );
};

export default CartItems;
