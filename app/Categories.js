import Image from "next/image";
import Link from "next/link";

const Categories = ({ name }) => {
  return (
    <Link
      href={`products?category=${name}`}
      className="relative w-32 h-56 rounded-md overflow-hidden cursor-pointer"
    >
      <Image src="/shop.jpg" alt={name} fill style={{ objectFit: "cover" }} />
      <div className="absolute m-auto left-0 right- text-lg font-semibold w-full">
        <h3 className="text-center">{name}</h3>
      </div>
    </Link>
  );
};

export default Categories;
