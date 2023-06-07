"use client";
import { categoryOptions, linkItems, products } from "@/data";
import NavLink from "./NavLink";
import Select from "./Select";

import { useEffect, useRef, useState } from "react";
import Intro from "./Intro";
import Search from "./Search";
import { useGlobalContext } from "@/app/context";
import Link from "next/link";
import Cart from "./Cart";

const Navbar = () => {
  const { focus } = useGlobalContext();
  const [item, setItems] = useState(null);
  const [getItem, setGetItem] = useState("");
  const categoriesRef = useRef();
  const specialRef = useRef();

  useEffect(() => {
    if (products) {
      setItems(products);
    }
  }, []);
  useEffect(() => {
    if (focus) {
      categoriesRef.current.style.display = "block";
      const timer = setTimeout(() => {
        categoriesRef.current.style.opacity = "100% ";
        categoriesRef.current.style.marginTop = "50px ";
        specialRef.current.style.display = "none";
      }, 200);
      return () => clearTimeout(timer);
    } else if (!focus) {
      categoriesRef.current.style.display = "none";
      categoriesRef.current.style.opacity = "50% ";
      categoriesRef.current.style.marginTop = "100px ";
      specialRef.current.style.display = "block";
    }
  }, [focus]);
  return (
    <nav className="z-20">
      <Intro />
      <div className="flex w-full items-center gap-20 px-10 h-14 ">
        <div className="flex basis-10/12 justify-between items-center">
          <Link href={`/`} className="inline-block cursor-pointer">
            LOGO
          </Link>
          {/* <Select name="categories" optionData={categoryOptions} /> */}
          <ul ref={specialRef}>
            <li className=" mx-5 inline-block">
              <Link href="/products?deal=true">Deals</Link>
            </li>
            <li className=" mx-5 inline-block">
              <Link href="/products?newDeal=true">What's New</Link>
            </li>
            {/* <li className=" mx-5 inline-block">
              <Link href="/delivery">Delivery</Link>
            </li> */}
          </ul>
          <Search
            categoriesRef={categoriesRef}
            categoryOptions={categoryOptions}
            item={item}
            getItem={getItem}
            setGetItem={setGetItem}
          />
        </div>
        <div className="flex justify-between basis-2/12">
          <NavLink name="account" link="signin" />
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
