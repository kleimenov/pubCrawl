import { useState, useCallback, useEffect } from "react";


export const useSearch = () => {
    const [search, setSearch] = useState(false)
    const [ready, setReady] = useState(false);
    const [response, setResponse] = useState([])

    const clearSearch = useCallback(() => {
        setResponse([])
        setSearch(false)
    }, [])

}