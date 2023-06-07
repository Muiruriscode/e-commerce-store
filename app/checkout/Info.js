"use client";
import Products from "./Products";
import { useGlobalContext } from "../context";

const Info = () => {
  const { cart } = useGlobalContext();

  return (
    <article className="basis-2/3 w-full">
      <div className="mx-10 border">
        <h1 className="my-4 text-xl px-5 font-semibold">
          Review Item and Shipping
        </h1>
        <div>
          {cart.map((item) => (
            <Products item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mx-10 border my-5 p-5 basis-1/3">
        <div className="flex justify-between h-10 mb-5">
          <h1 className="my-4 text-xl font-semibold">Delivery Information</h1>
          <button className="rounded-full bg-zinc-200 px-5">
            Save information
          </button>
        </div>
        <form action="">
          <div className="flex justify-between my-2">
            <div>
              <label
                htmlFor="first_name"
                className="font-bold text-sm text-zinc-500"
              >
                First Name
              </label>
              <input
                type="text"
                className="border px-5 py-1 block"
                placeholder=""
              />
            </div>
            <div>
              <label
                htmlFor="second_name"
                className="font-bold text-sm text-zinc-500"
              >
                Second Name
              </label>
              <input
                type="text"
                className="border px-5 py-1 block"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="font-bold text-sm text-zinc-500"
            >
              Address*
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="border px-5 py-1 block"
              placeholder=""
            />
          </div>
          <div className="flex justify-between my-2">
            <div>
              <label
                htmlFor="mobile"
                className="font-bold text-sm text-zinc-500"
              >
                Mobile*
              </label>
              <input
                type=" "
                className="border px-5 py-1 block"
                name="mobile"
                id="mobile"
                placeholder=""
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-bold text-sm text-zinc-500"
              >
                Email
              </label>
              <input
                type="email"
                className="border px-5 py-1 block"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex justify-between my-2">
            <div>
              <label
                htmlFor="location"
                className="font-bold text-sm text-zinc-500"
              >
                Location*
              </label>
              <input
                type="text"
                className="border px-5 py-1 block"
                name="location"
                id="location"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="code" className="font-bold text-sm text-zinc-500">
                Postal code*
              </label>
              <input
                type="text"
                name="code"
                id="code"
                className="border px-5 py-1 block"
                placeholder=""
              />
            </div>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Info;
