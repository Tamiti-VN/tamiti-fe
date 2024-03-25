import './style.css';
import { TProduct } from '../../@types/product';
import { useNavigate } from 'react-router-dom';
type ProductCardProps = {
  product: TProduct;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const imgPath = `https://res.cloudinary.com/nerotien/image/upload/ar_1.0,c_fill,h_400`;
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/products/${product._id}`);
  };
  return (
    <div className="card" key={product._id} onClick={onClickHandler}>
      <img src={`${imgPath}/${product.imgPath}`} alt={product.productName} />
      <h2>{product.productName}</h2>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};
