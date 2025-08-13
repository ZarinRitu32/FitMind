import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((s) => s.auth);
  const [form, setForm] = useState({ email: "", password: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(login(form));
    if (res.meta.requestStatus === "fulfilled") navigate("/");
  };

  return (
    <div className="card">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="primary" disabled={status === "loading"}>
          {status === "loading" ? "Signing in…" : "Login"}
        </button>
        <p>
          No account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
