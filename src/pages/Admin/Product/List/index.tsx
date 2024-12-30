import { useEffect, useState } from "react";
import { getProducts } from "../../../../apis/product";
import { TProduct } from "../../../../@types/product";
import "./style.css";
import { useNavigate } from "react-router";
export function ProductList() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="product">
      <div className="product__header">
        <h1>Products</h1>
        <button onClick={() => navigate("/admin/products/new")}>Create</button>
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
