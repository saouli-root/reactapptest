import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Error from "./components/Error"
import Menubar from "./components/Menubar"
import Auth from "./components/Auth"
import Dashboard from "./Private/Dashboard"
import Profile from "./Private/Profile"
import PrivateRoute from "./PrivateRoute"
import { AuthContext } from './auth/AuthProvider'

export default function ReactRouter() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Menubar/>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Auth} exact path="/auth" />
        <PrivateRoute
          path="/dashboard"
          isAuthenticated={user}
        >
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute
          path="/profile"
          isAuthenticated={user}
        >
          <Profile />
        </PrivateRoute>
        <Route component={Error} />
      </Switch>
    </Router>
  );
}