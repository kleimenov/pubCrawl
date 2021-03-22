import { useState, useCallback, useEffect } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState(false);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);

  const clearSearch = useCallback(() => {
    try {
      //throw new Error("Something went wrong")
    } catch (e) {
      //setError(e.message)
      throw e;
    }
  }, []);

  return {search, searching, error};
};
