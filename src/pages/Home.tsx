import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../features/product/ProductCard";

import { useProductsQuery } from "@/features/product/productSlice";
import { CarouselCustom } from "@/components/CarouselCustom";
type TProduct = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export function Home() {
  useTitle("Home Page");
  const { data, error, isLoading } = useProductsQuery([]);

  if (error) {
    return <div>Oh no, there was an error</div>;
  }
  if (isLoading) {
    return <div>Is Loading ...... </div>;
  }
  return (
    <div className="home">
      <div>
        <CarouselCustom />
      </div>

      <div className="home__product-list px-10">
        <p>Product</p>
        {data ? (
          data.map((product: TProduct) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h1>No Cakes !!</h1>
        )}
      </div>
    </div>
  );
}
