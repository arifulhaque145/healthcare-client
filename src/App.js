import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./Components/AuthProvider";
import Footer from "./Components/Footer";
import Navs from "./Components/Navs";
import PrivateRoute from "./Components/PrivateRoute";
import useFirebase from "./Hooks/useFirebase";
import AllServices from "./Pages/AllServices";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";

function App() {
  const { user } = useFirebase();

  return (
    <AuthProvider>
      <Router>
        <Navs />
        <Switch>
          <PrivateRoute path="/allservices">
            <AllServices />
          </PrivateRoute>
          {!user.displayName && (
            <Route path="/login">
              <Login />
            </Route>
          )}
          {!user.displayName && (
            <Route path="/register">
              <Register />
            </Route>
          )}
          <PrivateRoute path="/details">
            <Details />
          </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
