import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";

export const RegisterPage = () => {
  const auth = useContext(AuthContext);

  const { loading, error, request } = useHttp();

  const timeMachine = (currentUnixTime) => {
    return new Date(currentUnixTime).toUTCString();
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    date: timeMachine(new Date()),
  });

  useEffect(() => {}, [error]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registrationHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      auth.register(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div>
      <h3 className="text-secondary text-right mb-3">pubCrawl</h3>
      <div className="d-flex flex-column align-items-center reg-form-custom-wrapper py-5">
        <span className="h4 text-secondary">Registration</span>
        <input
          className="custom-border w-75 my-3"
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={changeHandler}
        />
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
        <input
          className="custom-border w-75 my-3"
          id="phone_number"
          type="phone_number"
          name="phone_number"
          placeholder="Enter your phone number"
          value={form.phone_number}
          onChange={changeHandler}
        />

        <div className="d-flex justify-content-between align-items-center w-75 mt-3">
          <button
            className="btn btn-secondary text-white py-1 px-2"
            onClick={registrationHandler}
            disabled={loading}
          >
            Sign Up
          </button>
          <Link className="text-dark h6 pt-2" to="/login">
            Back to login page
          </Link>
        </div>
      </div>
    </div>
  );
};
