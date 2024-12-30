import { useEffect, useState } from "react";
import { TProduct } from "../../share/@types/product";
import { useTitle } from "../../share/hooks/useTitle";
import { ProductCard } from "../../features/Product/ProductCard";
import "./style.css";
import { getProducts } from "../../old/apis/product";
export function Home() {
  useTitle("Home Page");

  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("product list error:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="home">
      <p>Product</p>
      <div className="home__product-list">
        {products ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <h1>No Cakes !!</h1>
        )}
      </div>
    </div>
  );
}
