import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../features/product/ProductApi";
import { useState } from "react";
import {ShoppingCart, Minus, Plus, Check} from 'lucide-react'
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";


const ProductDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1);

    const {data,isLoading,error} = useGetProductByIdQuery(id);
      
    if(isLoading) return <h1>Loading product..please relax</h1>
    if(error) return <h1>Failed to load product</h1>

  

    const handleQuantityChange = (type) => {
        if(type === 'increase'){
            setQuantity(prev => prev + 1);
        } else if(type === 'decrease' && quantity > 1){
            setQuantity(prev => prev - 1);
        }
    }
    const handleAddTocart = () =>{
        dispatch(
            addToCart({
                id: data.id,
                title: data.title,
                price: data.price,
                thumbnail: data.thumbnail,
                quantity,
            })
        );
    };

    return ( 
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-6">
                <div className="text-sm text-gray-500">
                    Home / Shop / Men / T-shirt / <span className="text-black font-medium">{data.title}</span>
                </div>
            </div>
             <div className="flex items-center grid grid-cols-1 sm:grid-cols-4 gap-6">
           <img src ={data.thumbnail}
            alt={data.title}
            className="w-full rounded-xl"/>
            </div>
            <div>
                <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm">{data.rating}/5</span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl font-bold">${data.price}</span>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        -{data.discountPercentage}
                    </span>
                </div>
                <p className="text-gray-600 mb-6 pb-6 border-b font-bold">
                    {data.description}
                </p>

                <div className="flex gap-4 mb-6">
                    <div className="flex items-center bg-gray-100 rounded-full px-5 py-3">
                        <button className="hover:opacity-70 transition"
                        onClick = {()=> handleQuantityChange('decrease')}
                            disabled={quantity <= 1}>
                                <Minus className="w-5 h-5"/>
                            </button>
                            <span className="mx-6 font-semibold min-w-[30px] text-center">{quantity}</span>
                            <button className="hover:opacity-70 transition"
                            onClick={()=> handleQuantityChange('increase')}>
                                <Plus className="w-5 h-5"/>
                            </button>
                    </div>
                    <button onClick={handleAddTocart}
                      className=' flex items-center gap-3 bg-black text-white px-12 py-4 rounded-full hover:bg-gray-800 transition'>
                        <ShoppingCart className="w-5 h-5"/>
                        Add to Cart
                      </button>
                </div>
                </div>
       

    </div> );
}
 
export default ProductDetails;