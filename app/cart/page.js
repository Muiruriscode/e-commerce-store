"use client";
import { useRef, useState } from "react";
import CartItems from "./CartItems";
import { CLEAR_CART } from "../reducer/Actions";
import Subheading from "../Subheading";
import { useGlobalContext } from "../context";
import { useRouter } from "next/navigation";
const page = () => {
  const [cost, setCost] = useState(0);
  const [clear, setClear] = useState(true);
  const modalRef = useRef();

  const { clearCart, cart, total } = useGlobalContext();
  const router = useRouter();
  return (
    <section className="flex justify-between px-10 h-screen gap-10 mt-10">
      {cart.length > 0 ? (
        <>
          <div className="basis-3/4 w-full gap-5">
            <CartItems setCost={setCost} />
          </div>
          <div className="flex flex-col basis-1/4 gap-5 border-2 px-5 py-5 h-fit">
            <div>
              <Subheading title="CLEAR CART" />
              <button
                onClick={() => (modalRef.current.style.display = "flex")}
                className="bg-primary text-white  w-full py-1"
              >
                CLEAR CART
              </button>
            </div>
            <div>
              <Subheading title="CHECKOUT" />
              <button
                onClick={() => router.push(`/checkout?subtotal=${total}`)}
                className="bg-primary text-white  w-full py-1"
              >
                CHECKOUT
              </button>
            </div>

            <hr />
            <h3 className="text-2xl font-semibold bg-zinc-100 p-2">
              Total Amount: {total}
            </h3>
            <div
              ref={modalRef}
              className="hidden absolute top-0 left-0 justify-center items-center h-screen flex-col bg-white/75 backdrop-filter backdrop-blur-lg w-full gap-20"
            >
              <h1 className="text-2xl font-semibold">
                Remove all items from the cart:
              </h1>
              <div className="flex gap-10">
                <button
                  onClick={(e) => clearCart()}
                  className="border-2 border-red-500 text-red-500 rounded-full px-8 py-1 "
                >
                  Clear items
                </button>
                <button
                  onClick={() => (modalRef.current.style.display = "none")}
                  className="bg-primary text-white px-12 border-2 border-primary rounded-full py-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-screen w-screen justify-center items-center">
          <h1 className="text-5xl text-primary">No items in the cart...</h1>
        </div>
      )}
    </section>
  );
};

export default page;
