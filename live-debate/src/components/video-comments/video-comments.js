import React, { useState } from 'react';
import {
	Link
} from "react-router-dom";
import "./video-comments.css";
import $ from "jquery";
import YouTube from "react-youtube";
import commentJSON from "../../data/json/comments.json";

export default class VideoComment extends React.Component {
    constructor(props) {
        super(props);
	this.state = {
	    video_start: 0,
	    index: 0,
	    comments: []
	};
	this.filterJSON = this.filterJSON.bind(this);
	this.addComments = this.addComments.bind(this);
	this.addAndReturn = this.addAndReturn.bind(this);
    }
    
    componentDidMount() {
	var cur = new Date().getTime();
        this.setState({video_start: cur});
    }

    filterJSON(to_filter, video_start) {
        var new_comments = [];
	var i;
        for (i = this.state.index; i < to_filter["entries"].length; i++) {
            var comment = to_filter["entries"][i];
	    var cur_time = new Date().getTime();
            if ((cur_time - video_start) >= comment["activation_time"]) {
	        new_comments.unshift(comment);
            } else {
                break;
            }
        }
	this.setState({index: i});
	return new_comments;
    }

    addComments() {
        var new_comments = this.filterJSON(commentJSON, this.state.video_start);
	this.setState({comments: new_comments.concat(this.state.comments)});
	console.log($());
    }
    
    addAndReturn(dict, key, val) {
        dict[key] = val;
	return dict;
    }

    render() {
        return (
            <div>
    	        <div class="Wrapper">
                    <div class="Video">            
                        <iframe 
                            width="100%" height="100%" 
                            src="https://www.youtube.com/embed/tSgP7NIEhLU?controls=0&amp;start=102" frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
		    <button class="refresh" onClick={this.addComments}>
		        Refresh comments
		    </button>
	            <div class="SyncComments">
		        {this.state.comments.map(comment => <Comment
			    key={this.state.index - this.state.comments.indexOf(comment)}
                            user={comment["user"]}
			    text={comment["text"]}
			    activation_time={comment["activation_time"]}
			    video_start={this.state.video_start}
			    />)
		        }
                    </div>
	        </div>
	    </div>
        );
    }
}



class Comment extends React.Component {
    constructor(props) {
        super(props);
	this.state = {
            cur: new Date().getTime()
	};
	var x = 0;
        var intervalID = setInterval(
		() => {
                    this.setState({cur: new Date().getTime()});
                    if (++x == 10) {
                        clearInterval(intervalID);
	            }
	        }, 60000);
    }
    render() {
	var diff_ms = this.state.cur - this.props.video_start - this.props.activation_time;
	var diff_min = Math.round(((diff_ms % 86400000) % 3600000) / 60000);
        return (
            <div class="comment">
		<div class="user">{this.props.user}</div>
		<div class="time_since">{diff_min} minutes ago</div>
		<div class="comment_text">{this.props.text}</div>
	    </div>
	)
    }


}

