import Image from "next/image";
import Details from "./Details";
import Heading from "@/app/Heading";
import { products } from "@/data";

const Products = ({ searchParams }) => {
  const { id } = searchParams;
  const similar = ["1", "2", "3"];
  return (
    <>
      <section>
        <div className="flex h-[calc(100vh-100px)] w-screen justify-center items-stretch py-5 ">
          {products.map((product, index) => {
            if (parseInt(id) === product.id) {
              return (
                <>
                  <div
                    className="basis-1/2 flex justify-center items-center"
                    key={product.id}
                  >
                    <div className="w-[500px] h-[500px] relative">
                      <Image
                        src="/hero.jpg"
                        alt={product.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <Details product={product} />
                </>
              );
            }
          })}
        </div>
      </section>
      <section className="px-10">
        <Heading title="Similar products" />
        {/* {products.map((product, index) => {
          if (parseInt(id) === product.id) {
            return (
              <>
                <ProductInfo />
              </>
            );
          }
        })} */}
      </section>
    </>
  );
};

export default Products;
