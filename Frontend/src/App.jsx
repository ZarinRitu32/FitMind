import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store/authSlice";

export default function App() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((s) => s.auth);

  return (
    <div>
      <nav>
        <Link to="/">FitMind</Link>
        <div>
          {!token && (
            <>
              <Link to="/login">Login</Link>{" "}
              <Link to="/register">Register</Link>
            </>
          )}
          {token && (
            <>
              <span>Hi {user?.name || "there"}</span>{" "}
              <button onClick={() => dispatch(logout())}>Logout</button>
            </>
          )}
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
