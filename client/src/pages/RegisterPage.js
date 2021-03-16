import React, { useState, useEffect, useContext } from "react";
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
      console.log(data);
    } catch (e) {}
  };
  return (
    <div>
      <h3 className="text-secondary text-center">pubCrawl</h3>
      <div className="d-flex flex-column align-items-center">
        <span className="h4 text-secondary">Registration</span>
        <input
          className="w-75 my-1"
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={changeHandler}
        />
        <input
          className="w-75 my-1"
          id="email"
          type="text"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={changeHandler}
        />
        <input
          className="w-75 my-1"
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={changeHandler}
        />
        <input
          className="w-75 my-1"
          id="phone_number"
          type="phone_number"
          name="phone_number"
          placeholder="Enter your phone number"
          value={form.phone_number}
          onChange={changeHandler}
        />

        <div className="d-flex justify-content-between align-items-center w-75 mt-2">
          <button
            className="btn btn-primary text-white p-0 px-1"
            onClick={registrationHandler}
            disabled={loading}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

/*
return (
    <div className="container">
      <h1 className="text-secondary">Registration form page </h1>
      <div className="d-flex flex-column">
        <form onSubmit={handleSubmit}>
          <label
            className="text-secondary mt-2 login-text-holder"
            htmlFor="first_name"
          >
            Please enter your first name
          </label>
          <input
            className="form-control ml-0 my-1"
            type="first_name"
            name="first_name"
            required
            autoFocus
            onChange={(evt) => setFirstName(evt.target.value)}
          ></input>
          <label
            className="text-secondary mt-2 login-text-holder"
            htmlFor="last_name"
          >
            Please enter your last name
          </label>
          <input
            className="form-control ml-0 my-1"
            type="last_name"
            name="last_name"
            required
            autoFocus
            onChange={(evt) => setSecondName(evt.target.value)}
          ></input>
          <label
            className="text-secondary mt-2 login-text-holder"
            htmlFor="phone_number"
          >
            Please enter your phone number
          </label>
          <input
            className="form-control ml-0 my-1"
            type="phone_name"
            name="phone_number"
            required
            autoFocus
            onChange={(evt) => setPhoneNumber(evt.target.value)}
          ></input>
          <label
            className="text-secondary mt-2 login-text-holder"
            htmlFor="email"
          >
            Please enter your email
          </label>
          <input
            className="form-control ml-0 my-1"
            type="email"
            name="email"
            required
            autoFocus
            onChange={(evt) => setEmail(evt.target.value)}
          ></input>
          <label
            className="text-secondary mt-2 login-text-holder"
            htmlFor="password"
          >
            Please enter your password
          </label>
          <input
            className="form-control ml-0 my-1"
            type="password"
            name="password"
            required
            autoFocus
            onChange={(evt) => setPassword(evt.target.value)}
          ></input>
          <button
            type="submit"
            className="registration-submit-button text-white my-2 pb-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );*/
