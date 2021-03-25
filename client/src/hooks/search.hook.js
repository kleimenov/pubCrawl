import { useState, useCallback, useEffect } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState(false);

   useCallback(() => {setSearch(true)}, []);

  return { isSearched, search };
};

