import React, { useCallback, useContext, useEffect, useState } from "react";
import { useSearch } from "../hooks/search.hook";
import { SearchContext } from "../context/SearchContext";
import { SearchEngine } from "../components/SearchEngine";
import { SearchResult } from "../components/SearchResult";
import { Loader } from "../components/Loader";

export const SearchPage = () => {
  //const { isSearched, search } = useSearch();
  //const [searched, setSearched] = useState(false);

  //if (searched) {
    //return <SearchResult setSearched={setSearched}/>;
  //}
  //return <SearchEngine setSearched={setSearched} />;
  return <SearchEngine />;
};
