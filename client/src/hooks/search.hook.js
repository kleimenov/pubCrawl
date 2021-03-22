import { useState, useCallback, useEffect } from "react";

export const useSearch = () => {
  const [searched, setSearch] = useState(false);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(() => {
    try {
      //throw new Error("Something went wrong")
    } catch (e) {
      //setError(e.message)
      throw e;
    }
  }, []);

  return {search, searched, searching, error};
};
