import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../features/cart/CartSelectors";

const Navbar = () => {
    const cartCount = useSelector(selectCartCount);
    
    return ( 
        <header className="border-b sticky top-0 bg-white z-50">
            <div className="bg-black text-white text-center py-2 text-sm">
                Sign up and get 20% off to your first order.
                <span className="underline cursor-pointer ml-2">Sign Up Now</span>
            </div>

            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Menu className="lg:hidden cursor-pointer"/>

                        <Link to="/" className="text-2xl font-bold hover:text-gray-700">
                            SILVER.CO
                        </Link>

                        <nav className="hidden lg:flex gap-6">
                            <Link to="/shop" className="hover:text-gray-600">Shop</Link>
                            <Link to="/sale" className="hover:text-gray-600">On Sale</Link>
                            <Link to="/new" className="hover:text-gray-600">New Arrivals</Link>
                            <Link to="/brands" className="hover:text-gray-600">Brands</Link>
                        </nav>
                    </div>

                    <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1 max-w-md mx-8">
                        <Search className="w-5 h-5 text-gray-400"/>
                        <input 
                        type="text"
                        placeholder="Search for products here.."
                        className="bg-transparent outline-none ml-2 w-full"/>
                    </div>

                    <div className="flex items-center gap-4">
                        <Search className="md:hidden w-6 h-6 cursor-pointer"/>

                        <Link to="/cart" className="relative cursor-pointer">
                        <ShoppingCart className="w-6 h-6 hover:text-gray-600 transition"/>
                        {cartCount > 0 &&(
                            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                                {cartCount}
                            </span>
                        )}
                        </Link>

                        <User className="w-6 h-6 cursor-pointer hover:text-gray-600 transition"/>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Navbar;