import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";

export const AuthPage = () => {
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

  const registrationHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      console.log(data)
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
      console.log(data)
    } catch (e) {}
  };

  return (
    <div>
      <div>
        <h1 className="text-secondary">Short links (Auth page)</h1>
        <div className="flex column">
          <span className="h4 text-secondary">Authentication</span>
          <div>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={changeHandler}
            />
            <label className="ml-2" htmlFor="email">
              Email
            </label>
          </div>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={changeHandler}
            />
            <label className="ml-2" htmlFor="first_name">
              Password
            </label>
          </div>
        </div>
        <div>
          <button
            className="btn btn-success text-white"
            onClick={loginHandler}
            disabled={loading}
          >
            Login
          </button>
          <button
            className="btn btn-warning text-white ml-1"
            onClick={registrationHandler}
            disabled={loading}
          >
            Registration
          </button>
        </div>
      </div>
    </div>
  );
};
