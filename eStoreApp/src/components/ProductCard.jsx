import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="glass-card group rounded-3xl p-3 hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-50 to-sky-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h2 className="mt-4 px-2 font-semibold text-sm line-clamp-2 min-h-10 group-hover:text-fuchsia-600 transition-colors">
        {product.title}
      </h2>
      <div className="flex items-center justify-between mt-3 px-2 pb-2">
        <p className="text-gray-800 font-bold">${product.price}</p>
        <span className="text-xs text-fuchsia-500 font-semibold">View →</span>
      </div>
    </Link>
  );
};

export default ProductCard;
