"use client";
import { useGlobalContext } from "../context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Order from "./Order";
import Info from "./Info";

const page = ({ searchParams }) => {
  const { cart } = useGlobalContext();
  const router = useRouter();
  useEffect(() => {
    if (cart.length < 1) {
      router.push("/");
    }
  }, []);
  const { subtotal } = searchParams;
  return (
    <section className="flex mt-10 px-10 justify-between">
      {cart.length > 0 && (
        <>
          <Info />
          <Order total={subtotal} />
        </>
      )}
    </section>
  );
};

export default page;
