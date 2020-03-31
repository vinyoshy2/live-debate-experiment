import React from 'react';
import logo from './logo.svg';
import './App.css';
import Consent from "./components/consent/consent.js";
import Instructions from "./components/instructions/instructions.js";
import Presurvey from "./components/pre-survey/pre-survey.js"
import VideoComments from "./components/video-comments/video-comments.js"
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
	        <Route exact path="/pre-survey">
	            <Presurvey />
	        </Route>
	        <Route exact path="/video-comments">
	            <VideoComments />
	        </Route>
	    </Switch>
        </Router>
  );
}

