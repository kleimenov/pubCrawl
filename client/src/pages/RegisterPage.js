import React, { useState, useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";

export const RegisterPage = () => {
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
      console.log(data);
    } catch (e) {}
  };
  return (
    <div>
      <h3>Hello and please Register</h3>
    </div>
  );
};
