import Image from "next/image";
import { useRouter } from "next/navigation";

const PopularCategories = ({ category }) => {
  const { name, description } = category;
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/product`);
      }}
      className="flex bg-neutral-100 h-16 p-3 gap-2 rounded-sm cursor-pointer"
    >
      <Image
        src="/hero.jpg"
        alt={name}
        width={40}
        height={40}
        style={{ objectFit: "cover" }}
      />
      <div className="text-black text-xs">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </button>
  );
};

export default PopularCategories;
