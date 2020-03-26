import React from 'react';
import logo from './logo.svg';
import './App.css';
import Consent from "./components/consent/consent.js"
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
	    </Switch>
        </Router>
  );
}

