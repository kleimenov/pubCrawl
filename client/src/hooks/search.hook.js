import { useState, useCallback, useEffect } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState(false);
  const isSearched = useCallback(() => {
    setSearch(!search);
  }, [search]);
  return { isSearched, search };
};
