import React, { useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useSearch } from "../hooks/search.hook";
import { AuthContext } from "../context/AuthContext";
import { SearchResult } from "../components/SearchResult";

export const SearchEngine = () => {
  const { loading, error, request } = useHttp();
  const auth = useContext(AuthContext);
  const [response, setResponse] = useState([]);
  const { search, isSearched } = useSearch();
  const [form, setForm] = useState({
    barName: "",
    type: "",
    district: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const checkForm = (formRaw) => {
    const newForm = {};
    for (let item in formRaw) {
      if (formRaw[item]) {
        newForm[item] = formRaw[item];
      }
    }
    return newForm;
  };

  const searchHandler = async () => {
    const newForm = checkForm(form);

    if (Object.keys(newForm).length) {
      try {
        const data = await request("/api/search", "POST", { ...newForm });
        setResponse(data);
        isSearched();
        setForm({});
      } catch (e) {}
    } else {
      console.log("Form is empty, please fill at least one field");
    }
  };

  const getAllHandler = async () => {
    try {
      const allData = await request("/api/search");
      setResponse(allData);
      isSearched();
    } catch (e) {}
  };

  if (!search) {
    return (
      <div>
        <h3 className="text-secondary text-right mb-3">pubCrawl</h3>
        <div className="d-flex flex-column align-items-center login-custom-wrapper p-5">
          <span className="h4 text-secondary">SearchPage</span>
          <input
            className="custom-border w-75 my-3"
            id="barName"
            type="text"
            name="barName"
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
            id="district"
            type="text"
            name="district"
            placeholder="Enter location (city/district)"
            value={form.district}
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
            <button
              className="btn btn-secondary text-white py-1 px-2"
              onClick={getAllHandler}
              disabled={loading}
            >
              All Bars
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <SearchResult data={response} isSearched={isSearched} />;
};
