import React, { useReducer } from "react";
import Subheading from "../Subheading";
import { useGlobalContext } from "../context";

const Checkout = ({ text, heading }) => {
  const { clearCart } = useGlobalContext();
  return (
    <div>
      <Subheading title={heading} />
      <button
        onClick={() => clearCart()}
        className="bg-primary text-white  w-full py-1"
      >
        {text}
      </button>
    </div>
  );
};

export default Checkout;
