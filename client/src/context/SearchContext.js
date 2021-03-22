import { createContext } from "react";

const mock = () => {};

export const SearchContext = createContext({
    searchResult: [],
    clearSearch: mock,
    isSearched: false
});
