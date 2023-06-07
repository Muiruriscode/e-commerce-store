import { categoryOptions } from "@/data";
import Image from "next/image";
import Categories from "./Categories";
import Heading from "./Heading";
import Products from "./Products";
import { products } from "@/data";

export default function Home() {
  return (
    <main>
      <section className="reltive">
        <div className="relative">
          <div className="w-screen h-[500px] relative">
            <Image
              src="/hero.jpg"
              alt="hero"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <article className="absolute top-0 left-0 w-2/5 flex flex-col h-full justify-center pl-10">
            <h1 className="text-5xl font-bold leading-snug text-primary">
              Shopping Department and Store
            </h1>
            <p>
              Shopping is a bit of a relaxing hobby, which is something
              troubling for the baank balance
            </p>
            <button className="rounded-full bg-primary w-fit text-white py-2 px-4 text-lg mt-5">
              Learn More
            </button>
          </article>
        </div>
      </section>
      <section>
        <Heading title="Shop Our Categories" />
        <div className="flex justify-between px-10 ">
          {categoryOptions.map((category, index) => {
            return <Categories name={category.name} key={index} />;
          })}
        </div>
      </section>
      <section>
        <Heading title="Tech" />
        <div className="flex justify-between px-10 gap-5">
          {products.map((product, index) => {
            if (product.category === "Tech")
              return <Products product={product} />;
          })}
        </div>
      </section>
      <section>
        <Heading title="Clothes" />
        <div className="flex justify-between px-10 gap-5">
          {products.map((product, index) => {
            if (product.category === "Clothes")
              return <Products product={product} />;
          })}
        </div>
      </section>
      <section>
        <Heading title="Books" />
        <div className="flex justify-between px-10 gap-5">
          {products.map((product, index) => {
            if (product.category === "Books")
              return <Products product={product} />;
          })}
        </div>
      </section>
      <section>
        <Heading title="Sneakers" />
        <div className="flex justify-between px-10 gap-5">
          {products.map((product, index) => {
            if (product.category === "Sneakers")
              return <Products product={product} />;
          })}
        </div>
      </section>
      <section>
        <Heading title="Hand Bags" />
        <div className="flex justify-between px-10 gap-5">
          {products.map((product, index) => {
            if (product.category === "Hand Bags")
              return <Products product={product} />;
          })}
        </div>
      </section>
      <section>
        <Heading title="Furniture" />
        <div className="flex justify-between px-10 gap-5">
          {products.map((product, index) => {
            if (product.category === "Furniture")
              return <Products product={product} />;
          })}
        </div>
      </section>
    </main>
  );
}
