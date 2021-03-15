import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { RegisterPage } from "./RegisterPage";

export const AuthPageII = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
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
      console.log(data);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
      console.log(data);
    } catch (e) {}
  };

  return (
    <div>
      <div>
        <h1 className="text-secondary">pubCrawl</h1>
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
          <div>
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
<Switch>
              <Link className="ml-1" to="/registration">
                Sign Up{" "}
              </Link>
            </Switch>
            */
