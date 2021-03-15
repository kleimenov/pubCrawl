import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";

export const AuthPage = () => {
  const { loading, error, request } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const rigisterHandler = async () => {
    try {
      const data = await request("/api/auth/register", { ...form });
    } catch (e) {}
  };

  return (
    <div>
      <div>
        <h1 className="text-secondary">Pub Crawl (Auth page)</h1>
        <div className="flex column">
          <span className="h4 text-secondary">Authentication</span>
          <div>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email"
              //value={form.email}
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
              //value={form.password}
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
            //onClick={loginHandler}
            //disabled={loading}
          >
            Login
          </button>
          <button
            className="btn btn-warning text-white ml-1"
            //onClick={rigisterHandler}
            //disabled={loading}
          >
            Registration (Don't have an account? Sign Up)
          </button>
        </div>
      </div>
    </div>
  );
};
