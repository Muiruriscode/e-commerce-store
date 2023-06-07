"use client";

import Link from "next/link";
import { useGlobalContext } from "@/app/context";

const Cart = () => {
  const { cart } = useGlobalContext();
  return (
    <div className="flex gap-2">
      <Link href={`/cart`}>cart</Link>
      <p>{cart?.length}</p>
    </div>
  );
};

export default Cart;
