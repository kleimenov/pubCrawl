import { createContext } from "react";

const mock = () => {};

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: mock,
    register: mock, 
    logout: mock,
    isAuthenticated: false 
})