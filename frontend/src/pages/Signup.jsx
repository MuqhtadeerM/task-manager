import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submit = async () => {
    const res = await API.post("/auth/signup", form);
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 rounded shadow w-80">
        <h2 className="mb-4 text-xl">Signup</h2>

        <input
          className="w-full p-2 mb-2 border"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full p-2 mb-2 border"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="w-full p-2 mb-2 border"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full p-2 text-white bg-green-500" onClick={submit}>
          Signup
        </button>

        <p className="mt-2 text-sm">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
