import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./Components/AuthProvider";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
