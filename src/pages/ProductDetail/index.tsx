import { useParams } from "react-router";
import "./style.css";
import { useEffect, useState } from "react";
import { getProductDetail } from "../../apis/product";
import { TProduct } from "../../@types/product";

function ProductDetail() {
  const params = useParams();
  const productId = params.productId as string;
  const [product, setProduct] = useState<TProduct>(Object);
  const imgPath = `https://res.cloudinary.com/nerotien/image/upload/ar_1.0,c_fill,h_800`;
  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await getProductDetail(productId);
        console.log(productId);

        setProduct(productData);
      } catch (error) {
        console.error("get product detail error:", error);
      }
    };
    getProduct();
  }, [productId]);

  return (
    <div className="product">
      <div className="product__gallery">
        <div className="product__side-img"></div>
        <div className="product__main-img">
          <img
            src={`${imgPath}/${product.productImgs}`}
            alt={product.productName}
          />
        </div>
      </div>

      <div className="product__detail">
        <p className="product__name">{product.productName} </p>
        <p className="product__description">{product.description}</p>
      </div>
    </div>
  );
}

export { ProductDetail };
