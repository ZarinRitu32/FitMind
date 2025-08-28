import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function Navbar() {
  const { token, user } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  return (
    <nav className="bg-gray-200 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-gray-800 font-bold text-2xl hover:opacity-80 transition"
        >
          FitMind
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          {token ? (
            <>
              <span className="text-gray-700 font-medium">Hello, {user}</span>

              {/* Profile Link */}
              <Link
                to="/profile"
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Profile
              </Link>

              {/* About Us */}
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                About Us
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Contact Us
              </Link>

              {/* Logout Button */}
              <button
                onClick={() => dispatch(logout())}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <Link
                to="/login"
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Login
              </Link>

              {/* Register */}
              <Link
                to="/register"
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Register
              </Link>

              {/* About Us */}
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                About Us
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 font-medium transition"
              >
                Contact Us
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
