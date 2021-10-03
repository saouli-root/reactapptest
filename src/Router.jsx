import React from "react"
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Error from  "./components/Error.jsx"
import Auth from "./components/Auth/Auth"

import Menubar from "./components/Menubar"



export default function ReactRouter() {
  return (
    <Router>
      <Menubar/>
        <Switch>
          <Route component ={Home} exact path ="/" />
          <Route component = {About} exact path ="/About" /> 
          <Route component = {Auth} exact path ="/Auth" /> 

          <Route component = {Error}/>

        </Switch>
    </Router>
  );
}

