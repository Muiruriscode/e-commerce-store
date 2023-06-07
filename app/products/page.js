import { products } from "@/data";
import Products from "../Products";
import Heading from "../Heading";

const Page = ({ searchParams }) => {
  const { category, deal, newDeal } = searchParams;
  return (
    <section>
      <Heading title={category} />
      <div className="grid grid-cols-5 gap-5 px-10">
        {products.map((product, index) => {
          const categoryLower = category?.toLowerCase();
          const productCategory = product.category.toLowerCase();
          return (
            <>
              {category
                ? categoryLower === productCategory && (
                    <Products product={product} key={index} />
                  )
                : null}
              {deal && product?.deal ? (
                <Products product={product} key={index} />
              ) : undefined}
              {newDeal && product?.newDeal ? (
                <Products product={product} key={index} />
              ) : undefined}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
