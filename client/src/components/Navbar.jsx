import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Device Store</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition">
              Products
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/cart"
                  className="text-gray-700 hover:text-blue-600 transition"
                  title="Cart"
                >
                  <ShoppingCart size={24} />
                </Link>
                
                {isAdmin && (
                  <Link
                    to="/admin/dashboard"
                    className="text-gray-700 hover:text-blue-600 transition"
                    title="Admin Dashboard"
                  >
                    <LayoutDashboard size={24} />
                  </Link>
                )}

                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-blue-600 transition"
                  title="Profile"
                >
                  <User size={24} />
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-red-600 transition"
                  title="Logout"
                >
                  <LogOut size={24} />
                </button>

                <span className="text-sm text-gray-600">
                  Hello, {user?.name}
                </span>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
