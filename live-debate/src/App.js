import React from 'react';
import './App.css';
import Consent from "./components/consent/consent.js";
import Instructions from "./components/instructions/instructions.js";
import Presurvey from "./components/pre-survey/pre-survey.js";
import SecondInstructions from "./components/second-instructions/second-instructions.js";
import Video from "./components/video/video.js";
import Comments from "./components/comments/comments.js";
import VideoComments from "./components/video-comments/video-comments.js";
import Postsurvey from "./components/post-survey/post-survey.js";
import EndSlide from "./components/end-slide/end-slide.js";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default class App extends React.Component {

    constructor(props) {
        super(props);
	this.state = {
            mode: 0,
	    bias: 0	
	};
    }
    componentDidMount() {
	var attempt = sessionStorage.getItem("mode");
	if (attempt == null) {
	     attempt = Math.round(Math.random());
	     sessionStorage.setItem("mode", attempt);
	}
        this.setState({mode: attempt});
	var attempt_bias = sessionStorage.getItem("bias");
	if (attempt_bias == null) {
	     attempt_bias = Math.round(Math.random());
	     sessionStorage.setItem("bias", attempt_bias);
	}
        this.setState({bias: attempt_bias});
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
	                <Presurvey mode={this.state.mode} bias={this.state.bias}/>
	            </Route>
		    <Route exact path="/second-instructions">
		        <SecondInstructions mode={this.state.mode}/>
		    </Route>
	            <Route exact path="/video-comments">
	                <VideoComments bias={this.state.bias}/>
	            </Route>
		    <Route exact path="/video">
		        <Video />
		    </Route>
		    <Route exact path="/comments">
			<Comments bias={this.state.bias}/>
		    </Route>
	            <Route exact path="/post-survey">
	                <Postsurvey mode={this.state.mode} bias={this.state.bias}/>
		    </Route>
		    <Route exact path="/end-slide">
		        <EndSlide />
		    </Route>
	    </Switch>
        </Router>
      );
    }
}

