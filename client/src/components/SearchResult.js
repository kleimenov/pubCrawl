import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";

export const SearchResult = ({ data, isSearched }) => {
  const { loading } = useHttp();
  console.log(data);

  const returnHandler = () => {
    isSearched();
  };
  return (
    <div>
      <h4 className="text-secondary text-right">This is result of your search:</h4> 
      <div className="d-flex justify-content-between align-items-center w-75 mt-3">
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
