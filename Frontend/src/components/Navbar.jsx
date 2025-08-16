import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function Navbar() {
  const { token, user } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-bold text-2xl hover:opacity-90 transition"
        >
          FitMind
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          {token ? (
            <>
              <span className="text-white font-medium">Hello, {user}</span>

              {/* Profile Link styled like Login/Register */}
              <Link
                to="/profile"
                className="text-white hover:text-gray-200 font-medium transition"
              >
                Profile
              </Link>

              {/* About Us */}
              <Link
                to="/about"
                className="text-white hover:text-gray-200 font-medium transition"
              >
                About Us
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact"
                className="text-white hover:text-gray-200 font-medium transition"
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
                className="text-white hover:text-gray-200 font-medium transition"
              >
                Login
              </Link>

              {/* Register */}
              <Link
                to="/register"
                className="text-white hover:text-gray-200 font-medium transition"
              >
                Register
              </Link>

              {/* About Us */}
              <Link
                to="/about"
                className="text-white hover:text-gray-200 font-medium transition"
              >
                About Us
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact"
                className="text-white hover:text-gray-200 font-medium transition"
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
