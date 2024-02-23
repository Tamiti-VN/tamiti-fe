import style from './style.module.css';
import { TProduct } from '../../@types/product';
type ProductCardProps = {
  product: TProduct;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const imgPath = `https://res.cloudinary.com/nerotien/image/upload/ar_1.0,c_fill,h_250`;
  return (
    <div className={style.card} key={product._id}>
      <img src={`${imgPath}/${product.img}`} alt={product.productName} />
      <h2>{product.productName}</h2>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};
