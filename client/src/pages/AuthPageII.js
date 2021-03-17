import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

export const AuthPageII = () => {
  const auth = useContext(AuthContext);
  const { loading, error, request } = useHttp();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {}, [error]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div>
      <h3 className="text-secondary text-right mb-3">pubCrawl</h3>
      <div className="d-flex flex-column align-items-center login-custom-wrapper p-5">
        <span className="h4 text-secondary">Authentication</span>
        <input
          className="custom-border w-75 my-3"
          id="email"
          type="text"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={changeHandler}
        />
        <input
          className="custom-border w-75 my-3"
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={changeHandler}
        />

        <div className="d-flex justify-content-between align-items-center w-75 mt-3">
          <button
            className="btn btn-secondary text-white py-1 px-2"
            onClick={loginHandler}
            disabled={loading}
          >
            Login
          </button>
          <div className="text-secondary">
            Don't have an account? <Link className="text-dark h6 pt-1" to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
