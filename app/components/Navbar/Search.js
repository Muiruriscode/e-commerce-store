import Subheading from "@/app/Subheading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/context";
const Search = ({
  categoriesRef,
  categoryOptions,
  item,
  getItem,
  setGetItem,
}) => {
  const router = useRouter();
  const { addFocus, removeFocus } = useGlobalContext();
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Pruduct"
        value={getItem}
        onChange={(e) => setGetItem(e.target.value)}
        className={`bg-neutral-100 focus:rounded-full px-5 py-1 w-96 focus:w-[500px] transition-all duration-200 ease-in`}
        onFocus={() => addFocus()}
        onBlur={() => {
          setTimeout(() => {
            removeFocus();
          }, 150);
        }}
      />
      <div
        ref={categoriesRef}
        className="hidden absolute bg-white opacity-0 left-0 right-0 top-0 m-auto w-[450px] mt-[100px] z-20 transition-all duration-500 ease-in-out"
      >
        {!getItem ? (
          <div className="p-3">
            <Subheading title="Popular categories" />
            <div className="grid grid-cols-2 gap-3 mt-2">
              {categoryOptions.map((category, index) => (
                <button
                  onClick={() => {
                    router.push(`/products?category=${category.name}`);
                  }}
                  className="flex bg-neutral-100 h-16 p-3 gap-2 rounded-sm cursor-pointer"
                  key={index}
                >
                  <Image
                    src="/hero.jpg"
                    alt="hero"
                    width={40}
                    height={40}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="text-black text-xs">
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-gray-700">{category.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {item.map((product) => {
              const { id } = product;
              return (
                <>
                  {product.tags.map((tag, index) => {
                    const tagl = tag.toLowerCase();
                    const getl = getItem.toLowerCase();
                    if (getl === tagl || tagl.startsWith(getl)) {
                      return (
                        <button
                          onClick={() => {
                            router.push(`/products/product/${id}?id=${id}`);
                            setGetItem("");
                          }}
                          key={index}
                          className="flex justify-between w-full"
                        >
                          <div className="flex basis-2/3 gap-4 items-center">
                            <Image
                              src="/hero.jpg"
                              alt={product.name}
                              width={50}
                              height={50}
                              style={{ objectFit: "cover" }}
                            />
                            <h4 className="font-semibold">{product.name}</h4>
                          </div>
                          <div className="flex basis-1/3 justify-between items-center">
                            <p>{product.rating}</p>
                            <p>{product.price}</p>
                          </div>
                        </button>
                      );
                    }
                    return;
                  })}
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
