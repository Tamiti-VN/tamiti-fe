import { useNavigate } from "react-router";
import productImage from "../../../assets/raucau_tet_1.jpeg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TProduct } from "../types/product";

type ProductCardProps = {
  product: TProduct;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card
      className="w-full cursor-pointer bg-[var(--card)] border-[var(--border)] hover:border-[var(--ring)]"
      onClick={onClickHandler}
    >
      <CardHeader className="p-2">
        <AspectRatio ratio={1 / 1}>
          <img
            className="rounded-md object-cover w-full h-full"
            src={`${productImage}`}
            alt={product.image}
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-2 *:text-sm *:text-[var(--card-foreground)] font-sans">
        <CardTitle className="">{product.title}</CardTitle>
        <CardDescription>
          {product.price ? `$${product.price}` : "No Price Available"}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
