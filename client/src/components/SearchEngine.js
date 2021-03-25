import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import {SearchContext} from '../context/SearchContext'
import { Loader } from "../components/Loader";
import { useSearch } from "../hooks/search.hook";

export const SearchEngine = ({setSearched}) => {
  const { loading, error, request } = useHttp();
  //const {isSearched, search} = useSearch();
  

  const [form, setForm] = useState({
    barName: "",
    type: "",
    location: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const checkForm = (formRaw) => {
    const newForm = {};
    for (let item in formRaw) {
      if (formRaw[item]) {
        newForm.item = formRaw[item];
      }
    }
    return newForm;
  };

  const searchHandler = async () => {
    const newForm = checkForm(form);
    //console.log("data on client to server", newForm);

    if (Object.keys(newForm).length) {
      try {
        const data = await request("/api/search", "POST", { ...newForm });
        console.log("data on client from server", data);
        setSearched(true)
      } catch (e) {}
    } else {
      console.log("Form is empty, please fill at least one field");
    }
  };

  return (
    <div>
      <h3 className="text-secondary text-right mb-3">pubCrawl</h3>
      <div className="d-flex flex-column align-items-center login-custom-wrapper p-5">
        <span className="h4 text-secondary">SearchPage</span>
        <input
          className="custom-border w-75 my-3"
          id="barName"
          type="text"
          name="name"
          placeholder="Enter Bar's name"
          value={form.barName}
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
