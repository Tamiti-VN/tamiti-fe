import "./style.css";
import { TProduct } from "../@types/product";
import { redirect } from "react-router";
type ProductCardProps = {
  product: TProduct;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const imgPath = `https://res.cloudinary.com/nerotien/image/upload/ar_1.0,c_fill,h_400/products`;
  // https://res.cloudinary.com/nerotien/image/upload/v1712237557/products/1a28b421-1f2e-4cea-b4a3-614b6657e430_2024-04-04-203233.jpg
  const onClickHandler = () => {
    redirect(`/products/${product._id}`);
  };
  return (
    <div className="card" onClick={onClickHandler}>
      {/* <img src={`${imgPath}/${product.productImgs}`} alt={product.productName} /> */}
      <img
        src={`${imgPath}/1a28b421-1f2e-4cea-b4a3-614b6657e430_2024-04-04-203233`}
        alt={product.productName}
      />
      <h2>{product.productName}</h2>
      <p>NO PRICE</p>
    </div>
  );
};
