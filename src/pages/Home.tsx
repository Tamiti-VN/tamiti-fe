import { ProductList } from "@/features/product/ProductList";
import { useTitle } from "../hooks/useTitle";

import { CarouselCustom } from "@/components/CarouselCustom";

export function Home() {
  useTitle("Home Page");

  return (
    <>
      <div>
        <CarouselCustom />
      </div>
      <div className="p-10 max-sm:p-4">
        <h1 className="pb-5 text-2xl text-center">Product</h1>
        <ProductList />
      </div>
    </>
  );
}
