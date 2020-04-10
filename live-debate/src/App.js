import React from 'react';
import logo from './logo.svg';
import './App.css';
import Consent from "./components/consent/consent.js";
import Instructions from "./components/instructions/instructions.js";
import Presurvey from "./components/pre-survey/pre-survey.js";
import SecondInstructions from "./components/second-instructions/second-instructions.js";
import Video from "./components/video/video.js";
import Comments from "./components/comments/comments.js";
import VideoComments from "./components/video-comments/video-comments.js";
import EndSlide from "./components/end-slide/end-slide.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class App() extends React.Component {

    constructor(props) {
        super(props);
	this.state = {
            mode: 0
	};
    }
    componentDidMount() {
        this.setState({mode: Math.round(Math.random())})
    }
    render() {
        return (
            <Router>
	        <Switch>
	            <Route exact path="/">
                        <Consent mode/>
	            </Route>
	            <Route exact path="/instructions">
	                <Instructions mode={this.state.mode} />
	            </Route>
	            <Route exact path="/pre-survey">
	                <Presurvey mode={this.state.mode}/>
	            </Route>
		    <Route exact path="/second-instructions">
		        <SecondInstructions mode={this.state.mode/>
		    </Route>
	            <Route exact path="/video-comments">
	                <VideoComments />
	            </Route>
		    <Route exact path="/video">
		        <Video />
		    </Route>
		    </Route exact path="/comments">
			<Comments />
		    </Route>
	            <Route exact path="/post-survey">
	                <Postsurvey mode={this.state.mode}/>
		    </Route>
		    <Route exact path="/end-slide">
		        <EndSlide />
		    </Route>
	    </Switch>
        </Router>
      );
    }
}

