import { useProductsQuery } from "@/features/product/productSlice";
import { ProductCard } from "./components/ProductCard";
import { TProduct } from "./types/product";

export function ProductList() {
  const { data, error, isLoading } = useProductsQuery([]);

  if (error) {
    return <div>Oh no, there was an error.</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data || data.length === 0) {
    return <h1>No Products Available</h1>;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {data.map((product: TProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
