import Image from "next/image";

const Products = ({ item }) => {
  const color = item.color || "black";
  return (
    <div className="mx-5 flex mb-3 justify-between items-center shadow-md px-5">
      <div className="flex  items-center gap-5">
        <Image
          src="/hero.jpg"
          width={200}
          height={100}
          alt={item.name}
          style={{ objectFit: "cover" }}
        />
        <div>
          <h2 className="font-bold text-lg">{item.name}</h2>
          <p>{color}</p>
        </div>
      </div>
      <div>
        <p className="font-bold">${item.price}</p>
        <p>quantity: {item.count}</p>
      </div>
    </div>
  );
};

export default Products;
