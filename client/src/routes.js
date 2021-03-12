import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { SearchPage } from "./pages/SearchPage";
import { CreatePage } from "./pages/CreatePage";
import { BarDetailPage } from "./pages/BarDetailPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/search" exact>
          <SearchPage />
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
      <Route to="/">
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
