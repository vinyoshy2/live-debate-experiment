import React, { useState } from 'react';
import {
	Link
} from "react-router-dom";
import "./video.css";
import $ from "jquery";
import YouTube from "react-youtube";

export default class Video extends React.Component {
    constructor(props) {
        super(props);
	this.state = {
	    video-start: 0,
	    complete: true
	};
	this.addNext = this.addNext.bind(this);
    }
    
    componentDidMount() {
	var cur = new Date().getTime();
        this.setState({video_start: cur});
    }

    addNext() {
        this.setState({complete: true});
    }

    render() {
        const videoOptions = {
	    position: "absolute",
	    width: "100% !important",
            playerVars: {
                autoplay: 1,
                controls: 0,
                fs: 0,
                modestbranding: 1,
                start: 102
            }
        
        }
	let next_button;
	if (this.state.complete) {
            next_button = <Link to="/comments"><button class="button"> Next </button></Link>
	} else {
            next_button = <div></div>
	}
        return (
            <div>
		    <div class="Video-alone">
	          	<YouTube videoId="tSgP7NIEhLU" opts={videoOptions} onEnd={this.addNext}/>
		    </div>
		    {next_button}
	    </div>
        );
    }
}


