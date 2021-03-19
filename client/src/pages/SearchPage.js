import React, { useCallback, useContext, useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { Loader } from "../components/Loader";

export const SearchPage = () => {
  const { loading, error, request } = useHttp();

  const [form, setForm] = useState({
    barName: "",
    type: "",
    location: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  

  const searchHandler = async () => {
    console.log("data on client to server", form);
    try {
      const data = await request("/api/search", "POST", { ...form });
      console.log("data on client from server", data);
    } catch (e) {}
  };

  return (
    <div>
      <h3 className="text-secondary text-right mb-3">pubCrawl</h3>
      <div className="d-flex flex-column align-items-center login-custom-wrapper p-5">
        <span className="h4 text-secondary">SearchPage</span>
        <input
          className="custom-border w-75 my-3"
          id="name"
          type="text"
          name="name"
          placeholder="Enter Bar's name"
          value={form.name}
          onChange={changeHandler}
          autoComplete="off"
        />
        <input
          className="custom-border w-75 my-3"
          id="type"
          type="text"
          name="type"
          placeholder="Enter type (bar/pub and so on...)"
          value={form.type}
          onChange={changeHandler}
          autoComplete="off"
        />
        <input
          className="custom-border w-75 my-3"
          id="location"
          type="text"
          name="location"
          placeholder="Enter location (city/district)"
          value={form.location}
          onChange={changeHandler}
          autoComplete="off"
        />
        <div className="d-flex justify-content-between align-items-center w-75 mt-3">
          <button
            className="btn btn-secondary text-white py-1 px-2"
            onClick={searchHandler}
            disabled={loading}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

/*

return (
    <div>
      <h3>SearchPage</h3>

    </div>
  );


  */

/*
export const SearchPage = () => {
  const [links, setLinks] = useState([]);
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request("/api/search", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(fetched);
    } catch (e) {}
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  }
  console.log(links);

  return (
    <div>
      <h3>SearchPage</h3>

    </div>
  );
}; 
*/
