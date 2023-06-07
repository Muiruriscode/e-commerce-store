import Link from "next/link";
import React from "react";

const NavLink = ({ name, link }) => {
  return (
    <>
      <Link href="/products/">{name}</Link>
    </>
  );
};

export default NavLink;
