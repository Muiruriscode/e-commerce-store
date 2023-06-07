import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Image from "next/image";

const CartItem = ({ cartItem, index }) => {
  const { setTotal, removeFromCart, cart, increase, decrease } =
    useGlobalContext();
  const { id, name, details, price, rating, colors, count } = cartItem;

  useEffect(() => {
    setTotal(count * price);
  }, [cart]);
  return (
    <>
      <div className="flex h-fit gap-10 items-center">
        <Image
          src={name}
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
          alt={name}
        />
        <div className="bg-zinc-100 justify-between flex h-full w-96">
          <div className="flex flex-col justify-between p-5  ">
            <h1 className="text-lg font-semibold">{name}</h1>
            <p className="text-sm text-zinc-600">
              Price: <span className="text-black font-semibold">{price}</span>
            </p>
          </div>
          <div className="flex flex-col justify-between items-center pr-5 mt-5">
            <div className="flex items-center">
              <button
                onClick={() => decrease(id)}
                className="rounded-full bg-primary text-white  w-7 h-7"
              >
                -
              </button>
              <p className="text-sm text-zinc-600 mx-5">
                <span className="text-black font-semibold"> {count}</span>
              </p>
              <button
                onClick={() => increase(id)}
                className="rounded-full bg-primary text-white w-7 h-7"
              >
                +
              </button>
            </div>
            <p className="font-semibold mt-5 mb-5">
              Total{" "}
              <span className="text-black font-semibold"> {count * price}</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => removeFromCart(id)}
          className="bg-primary text-white px-10 py-1"
        >
          Remove from cart
        </button>
      </div>
    </>
  );
};

export default CartItem;
