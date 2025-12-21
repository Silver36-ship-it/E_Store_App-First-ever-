import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/product/ProductApi";

const ProductCard = ({product}) => {
   
    return ( 
        <Link to={`/product/${product.id}`}
        className="border rounded-lg p-4 hover:shadow-md transition">
              <img src={product.thumbnail} alt="" className="bg-gray-300 w-full h-48 object-cover rounded"/>
                    <h2 className="mt-3 font-semibold text-sm">
                        {product.title}</h2>
                    <p className="mt-1 text-gray-700 font-medium">
                        ${product.price}</p>
                    </Link>
       
     );
}
 
export default ProductCard;