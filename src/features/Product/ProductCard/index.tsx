import { redirect } from "react-router";
import "./style.css";
// import { TProduct } from "../../../share/@types/product";
// type ProductCardProps = {
//   product: TProduct;
// };
import productImage from "../../../assets/raucau_tet_1.jpeg";
export const ProductCard = ({ product }: any) => {
  // const imgPath = `https://res.cloudinary.com/nerotien/image/upload/ar_1.0,c_fill,h_400/products`;
  // https://res.cloudinary.com/nerotien/image/upload/v1712237557/products/1a28b421-1f2e-4cea-b4a3-614b6657e430_2024-04-04-203233.jpg
  const onClickHandler = () => {
    redirect(`/products/${product._id}`);
  };
  return (
    <div className="card" onClick={onClickHandler} key={product.id}>
      {/* <img src={`${product.image}`} alt={product.title} /> */}
      {/* <img src={`${imgPath}/${product.productImgs}`} alt={product.productName} /> */}
      <img src={`${productImage}`} alt={product.productName} />
      <h2>{product.title}</h2>
      <p>NO PRICE</p>
    </div>
  );
};
