import { useState } from "react";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../features/cart/CartSelectors";

const Navbar = () => {
  const cartCount = useSelector(selectCartCount);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-50 glass-nav">
      <div className="gradient-ink text-white text-center py-2 text-xs tracking-wide">
        Sign up and get 20% off to your first order.
        <span className="underline cursor-pointer ml-2">Sign Up Now</span>
      </div>

      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-8">
            <button
              type="button"
              className="lg:hidden"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X className="cursor-pointer" /> : <Menu className="cursor-pointer" />}
            </button>

            <Link
              to="/"
              className="brand-mark text-2xl font-bold hover:text-fuchsia-600 transition-colors"
            >
              SILVER.CO
            </Link>

            <nav className="hidden lg:flex gap-6 text-sm font-medium">
              <Link to="/" className="hover:text-fuchsia-600 transition-colors">
                Shop
              </Link>
              <a
                href="#new-arrivals"
                className="hover:text-fuchsia-600 transition-colors"
              >
                New Arrivals
              </a>
              <a
                href="#styles"
                className="hover:text-fuchsia-600 transition-colors"
              >
                Collections
              </a>
              <a
                href="#reviews"
                className="hover:text-fuchsia-600 transition-colors"
              >
                Reviews
              </a>
            </nav>
          </div>

          <div className="hidden md:flex items-center bg-white/60 border border-white rounded-full px-4 py-2 flex-1 max-w-md mx-8">
            <Search className="w-5 h-5 text-fuchsia-400" />
            <input
              type="text"
              placeholder="Search for products here.."
              className="bg-transparent outline-none ml-2 w-full"
            />
          </div>

          <div className="flex items-center gap-4">
            <Search className="md:hidden w-6 h-6 cursor-pointer" />

            <Link to="/cart" className="relative cursor-pointer">
              <ShoppingCart className="w-6 h-6 hover:text-gray-600 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-fuchsia-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>

            <User className="w-6 h-6 cursor-pointer hover:text-gray-600 transition" />
          </div>
        </div>
        {isMenuOpen && (
          <nav id="mobile-navigation" className="lg:hidden flex flex-col gap-4 pt-4 pb-2 text-sm font-medium">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-fuchsia-600 transition-colors">
              Shop
            </Link>
            <a href="#new-arrivals" onClick={() => setIsMenuOpen(false)} className="hover:text-fuchsia-600 transition-colors">
              New Arrivals
            </a>
            <a href="#styles" onClick={() => setIsMenuOpen(false)} className="hover:text-fuchsia-600 transition-colors">
              Collections
            </a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="hover:text-fuchsia-600 transition-colors">
              Reviews
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
