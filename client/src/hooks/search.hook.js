import { useState, useCallback, useEffect } from "react";

export const useSearch = (currentState) => {
  const [search, setSearch] = useState(currentState);

  const isSearched = useCallback(() => {setSearch(!search)}, []);

  return { isSearched, search };
};

