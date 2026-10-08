import { useParams } from "react-router-dom";
import { useGetProductByCategoryQuery } from "../features/product/ProductApi";
import ProductCard from "../components/ProductCard";
const Category = () => {
    const {categoryName} = useParams();

    const {data,isLoading,error} = useGetProductByCategoryQuery(categoryName);

    if(isLoading) return <p>Loading products...please wait</p>

    if(error) return <p>Failed to load products</p>
    return ( 
        <div className="container mx-auto px-4 py-6 sm:py-8">
        <h1 className="text-2xl font-bold capitalize mb-6">
            {categoryName}</h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {data.products.map(product =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </div> );
}
 
export default Category;