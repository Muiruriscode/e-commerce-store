import React from "react";
import Heading from "../Heading";
import Subheading from "../Subheading";

const Order = ({ total }) => {
  const taxedAmount = total * 1.1;

  return (
    <article className="border">
      <Heading title="Order Summary" />
      <div className="px-10">
        <hr />
        <Subheading title="Payment detatils" />
        <div className="mt-2">
          <input type="radio" name="pay" id="cash" />
          <label htmlFor="cash">Cash</label>
        </div>
        <div className="mb-2">
          <input type="radio" name="pay" id="credit" />
          <label htmlFor="credit">credit</label>
        </div>
        <hr />
        <form className="flex flex-col gap-3 justify-between mt-2">
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border px-2 py-1 block"
              placeholder="email"
            />
          </div>
          <div>
            <label htmlFor="name">Card Holder name</label>
            <input
              type="name"
              name="name"
              id="name"
              className="border px-2 py-1 block"
              placeholder="Name"
            />
          </div>
        </form>
        <br />
        <hr />
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex justify-between font-semibold">
            <p>sub total</p>
            <p>{total}</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>tax-10%:</p>
            <p>{total}</p>
          </div>
          <hr />
          <div className="flex justify-between font-semibold">
            <p>total:</p>
            <p>{taxedAmount.toFixed(2)}</p>
          </div>
          <button className="bg-primary rounded-full text-white py-2">
            pay {taxedAmount.toFixed(2)}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Order;
