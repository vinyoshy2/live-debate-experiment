import React from 'react';
import logo from './logo.svg';
import './App.css';
import Consent from "./components/consent/consent.js";
import Instructions from "./components/instructions/instructions.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
	    <Switch>
	        <Route exact path="/">
                    <Consent />
	        </Route>
	        <Route exact path="/instructions">
	            <Instructions />
	        </Route>
	    </Switch>
        </Router>
  );
}

