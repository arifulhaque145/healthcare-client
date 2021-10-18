import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./Components/AuthProvider";
import Footer from "./Components/Footer";
import Navs from "./Components/Navs";
import PrivateRoute from "./Components/PrivateRoute";
import AllServices from "./Pages/AllServices";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navs />
        <Switch>
          <PrivateRoute path="/allservices">
            <AllServices />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
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
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
