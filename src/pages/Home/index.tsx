import { useEffect, useState } from 'react';
import { TProduct } from '../../@types/product';
import { useTitle } from '../../hooks/useTitle';
import { ProductCard } from '../../components/ProductCard';
import style from './style.module.css';

import { getProducts } from '../../apis/product';

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
    <div className={style.home_container}>
      <div className={style.product_list_wrapper}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
