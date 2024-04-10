import './style.css';
import { TProduct } from '../../@types/product';
import { redirect } from 'react-router-dom';
type ProductCardProps = {
  product: TProduct;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const imgPath = `https://res.cloudinary.com/nerotien/image/upload/ar_1.0,c_fill,h_400`;

  const onClickHandler = () => {
    redirect(`/products/${product._id}`);
  };
  return (
    <div className="card" onClick={onClickHandler}>
      <img src={`${imgPath}/${product.productImgs}`} alt={product.productName} />
      <h2>{product.productName}</h2>
      <p>NO PRICE</p>
    </div>
  );
};
