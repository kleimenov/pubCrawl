import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useSearch } from "../hooks/search.hook"


export const SearchResult = ({data, isSearched}) => {
  
  const {loading} = useHttp()
  console.log(data)

  
  const searchHandler = () => {
    isSearched()
  }
  return (
    <div>
        Hello you are on SearchResult component!
        <div className="d-flex justify-content-between align-items-center w-75 mt-3">
          <button
            className="btn btn-secondary text-white py-1 px-2"
            onClick={searchHandler}
            disabled={loading}
          >
            Back to Search
          </button>
          </div>
    </div>
    );
};
