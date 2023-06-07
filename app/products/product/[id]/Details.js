"use client";
import { useState } from "react";
import Color from "./Color";
import Button from "./Button";
import Delivery from "./Delivery";
import { products } from "@/data";
import { useGlobalContext } from "@/app/context";

const Details = ({ product }) => {
  const { id, name, details, price, rating, colors, stock } = product;
  const { increase, decrease, addItem, cart } = useGlobalContext();
  const [number, setNumber] = useState(1);
  const [itemStock, setItemStock] = useState(stock - 1);

  function handleCount(type) {
    if (type === "increase") {
      if (number < stock) {
        setNumber(number + 1);
        setItemStock(itemStock - 1);
      }
    } else if (type === "decrease") {
      if (number > 1) {
        setNumber(number - 1);
        setItemStock(itemStock + 1);
      }
    }
  }

  return (
    <article className="flex basis-1/2 flex-col justify-center gap-5">
      <div>
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-neutral-700 text-sm">{details}</p>
        <p>{rating}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">{price}</h2>
        <p className="text-neutral-700 text-sm">
          special offering pay for 8 months
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Choose color</h2>
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <Color color={color} key={index} />
          ))}
        </div>
        <div className="flex">
          <button
            className="bg-zinc-200 rounded-l-full px-3"
            onClick={() => handleCount("decrease")}
          >
            -
          </button>
          <p className="bg-zinc-200 px-5 py-1 text center">{number}</p>
          <button
            className="bg-zinc-200 rounded-r-full px-3"
            onClick={() => handleCount("increase")}
          >
            +
          </button>
          <div className="ml-5 text-neutral-500 text-sm">
            <p>
              only <span className="text-orange-500">{itemStock}</span> items
              left
            </p>
            <p>Don&apos;t be left out</p>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <Button name="Buy Now" primary />
        <button
          className={`rounded-full px-8 py-1 border border-primary text-primary
          }`}
          onClick={(e) =>
            addItem({
              id,
              name,
              details,
              price,
              rating,
              colors,
              count: number,
              stock: itemStock,
            })
          }
        >
          Add to cart
        </button>
      </div>
      <Delivery
        title="Free Delivery"
        desc="Enter Your postal Code for delivery Availability"
      />
      <Delivery title="Return Delivery" desc="Free 30 day returns" />
    </article>
  );
};

export default Details;
