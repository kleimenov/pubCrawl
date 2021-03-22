import React, { useCallback, useContext, useEffect, useState } from "react";
import { useSearch } from "../hooks/search.hook";
import { SearchContext } from "../context/SearchContext";
import { SearchEngine } from "../components/SearchEngine";
import { SearchResult } from "../components/SearchResult";
import { Loader } from "../components/Loader";

export const SearchPage = () => {
  const search = useContext(SearchContext);

  if (!search.isSearched) {
    return <SearchEngine />;
  }
  /*
  if (loading) {
    return <Loader />;
  }*/

  return <SearchResult />;
};

