import { useDispatch, useSelector } from "react-redux";
import {Plus, Minus, Trash} from "lucide-react";
import { updateQuantity, removeFromCart } from "../features/cart/CartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=> state.cart.items);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    if (cartItems.length === 0){
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
            </div>
        );
    }
    return ( 
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="space-y-6">
            {cartItems.map((item)=>(
                <div
                    key={item.id}
                    className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6 border-b pb-6">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg"/>

                <div className="flex-1 min-w-[calc(100%-5rem)] sm:min-w-0">
                    <h2 className="font-semibold text-base sm:text-lg break-words">{item.title}</h2>
                    <p className="text-gray-600">${item.price}</p>
                </div>

                <div className="flex items-center gap-3 ml-auto">
                    <button
                        onClick={()=>
                            dispatch(
                                updateQuantity({
                                    id: item.id,
                                    quantity: Math.max(1, item.quantity - 1),
                                })
                            )
                        }>
                            <Minus />
                        </button>
                        <span className="font-semibold">{item.quantity}</span>

                        <button
                            onClick={()=>
                                dispatch(
                                    updateQuantity({
                                        id: item.id,
                                        quantity: item.quantity + 1
                                    })
                                )
                            }>
                                <Plus />
                            </button>
                            </div>

                            <div className="w-20 sm:w-24 font-semibold text-right">
                                ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            <button
                                onClick={() => dispatch(
                                    removeFromCart(item.id)
                                )}
                                className="text-red-500">
                                    <Trash />
                                </button>
                </div>
            ))}
        </div>

        <div className="mt-8 flex justify-end">
            <div className="text-xl font-bold">
                Total: ${total.toFixed(2)}
            </div>
        </div>
    </div> );
};
 
export default Cart;