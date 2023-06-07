import Link from "next/link";

const Delivery = ({ title, desc }) => {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <Link href="#" className="text-zinc-500 text-sm underline">
        {desc}
      </Link>
    </div>
  );
};

export default Delivery;
