import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useSearch } from "../hooks/search.hook"


export const SearchResult = ({data, search}) => {
  const [moveBack, setMoveBack] = useState(search);
  const {loading} = useHttp()
  console.log(moveBack, data)
  const {isSearched} = useSearch()
  
  const searchHandler = () => {
   return isSearched()
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
