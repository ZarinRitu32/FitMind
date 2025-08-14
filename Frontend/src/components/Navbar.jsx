import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function Navbar() {
  const { token, user } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        FitMind
      </Link>
      <div className="space-x-4">
        {token ? (
          <>
            <span>Hello, {user}</span>
            <button
              onClick={() => dispatch(logout())}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-green-500 hover:underline">
              Login
            </Link>
            <Link to="/register" className="text-green-500 hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
