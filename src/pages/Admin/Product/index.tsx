import { useEffect, useState } from 'react';
import { getProducts } from '../../../apis/product';
import { Product } from '../../../@types/product';
import './style.css';
export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="product">
      <h1>Products</h1>
      <div className="product__action-bar">
        <div className="action-bar__btn">
          <button type="button">+</button>
        </div>
        <div className="action-bar__wrapper">
          <input type="search" name="" id="" />
          <select name="limit" id="">
            <option value="">5</option>
            <option value="">10</option>
            <option value="">15</option>
          </select>
          <select name=" list type" id="">
            <option value="">grid</option>
            <option value="">column</option>
          </select>
        </div>
      </div>
      <table className="product__table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products
            ? products.map((data) => (
                <tr key={data._id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td> {data.productName}</td>
                  <td> {data.description}</td>
                  <td> {data.productImgs}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
