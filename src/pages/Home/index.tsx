import { useEffect, useState } from 'react';
import { TProduct } from '../../@types/product';
import { useTitle } from '../../hooks/useTitle';
import { ProductCard } from '../../components/ProductCard';
import './style.css';

import { getProducts } from '../../apis/product';
import { For } from 'million/react';

export function Home() {
  useTitle('Home Page');

  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('product list error:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="home">
      <div className="home__product-list">
        <For each={products}>
          {(product) => <ProductCard key={product._id} product={product} />}
        </For>
      </div>
    </div>
  );
}
