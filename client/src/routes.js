import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//import { AuthPage } from "./pages/AuthPage";
import { AuthPageII } from "./pages/AuthPageII";
import { SearchPage } from "./pages/SearchPage";
import { CreatePage } from "./pages/CreatePage";
import { BarDetailPage } from "./pages/BarDetailPage";
import { BarsPage } from "./pages/BarsPage";
import {RegisterPage} from './pages/RegisterPage'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <SearchPage />
        </Route>
        <Route path="/barslist" exact>
          <BarsPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id" exact>
          <BarDetailPage />
        </Route>
        <Redirect to="/search" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPageII />
      </Route>
      <Route path="/register" exact>
        <RegisterPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
