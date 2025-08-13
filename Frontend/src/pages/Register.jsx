import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/authSlice";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((s) => s.auth);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(register(form));
    if (res.meta.requestStatus === "fulfilled") navigate("/");
  };

  return (
    <div className="card">
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
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
        <div>
          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            value={form.password_confirmation}
            onChange={(e) =>
              setForm({ ...form, password_confirmation: e.target.value })
            }
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="primary" disabled={status === "loading"}>
          {status === "loading" ? "Creating…" : "Register"}
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
