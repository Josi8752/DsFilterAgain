import "./styles.css";
import { ProductDTO } from "../../models/productDTO";


type Props = {
    product: ProductDTO;
}
export default function Listing({ product }: Props) {
    return (

        <div className="card-description">
            <p className="name-product">{product.name}</p>

            <p className="price-product">{product.price}</p>
        </div>
    );
}