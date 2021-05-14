import React, { useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { AddButton } from "./AddButton"
import { AuthContext } from "../context/AuthContext";

export const SearchResult = ({ data, isSearched }) => {
  const { loading } = useHttp();
  const auth = useContext(AuthContext);
  const returnHandler = () => {
    isSearched();
  };
  return (
    <div>
      <h4 className="text-secondary text-right my-4">
        This is result of your search:
      </h4>
      <ul className="list-unstyled my-3">
        {data.map((item, i) => (
          <li className="my-2" key={item._id}>
            <div className="search-wrapper">
              <h5 className="text-secondary ml-2 pt-2">
                {item.barName} / {item.type} / {item.district}
              </h5>
              <AddButton />
            </div>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-start align-items-center mt-5">
        <button
          className="btn btn-secondary text-white py-1 px-2"
          onClick={returnHandler}
          disabled={loading}
        >
          Back to Search
        </button>
      </div>
    </div>
  );
};
