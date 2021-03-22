import { useState, useCallback, useEffect } from "react";

export const useSearch = () => {
  const [searched, setSearched] = useState(false);

  const search = useCallback((searched) => {
    setSearched(!searched);
  }, []);

  return { search, searched };
};
