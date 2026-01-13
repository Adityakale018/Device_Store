import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/products/${product._id}`}>
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          {product.images && product.images[0] ? (
            <img
              src={product.images[0].url}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400">No Image</span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/products/${product._id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mt-1">{product.brand}</p>

        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="ml-1 text-sm text-gray-600">
              {product.ratings?.toFixed(1) || '0.0'} ({product.reviews?.length || 0})
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
          
          {product.stock > 0 ? (
            <button
              onClick={() => onAddToCart && onAddToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
            >
              <ShoppingCart size={18} className="mr-1" />
              Add
            </button>
          ) : (
            <span className="text-red-600 font-medium">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
