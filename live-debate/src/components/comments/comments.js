import React from 'react';
import {
	Link
} from "react-router-dom";
import "./comments.css";
import commentJSON from "../../data/json/comments.json";
import commentpoJSON from "../../data/json/comments_PO.json";

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
	if (this.props.bias == 0) {
	    comJSON = commentJSON;
	} else {
            comJSON = commentpoJSON;
	}
	this.state = {
	    comments: comJSON["entries"],
	};
    }
    
    addNext() {
        this.setState({complete: true});
    }

    render() {
	let next_button;
        next_button = <Link to="/post-survey"><button class="button-comments"> Next </button></Link>;
        return (
		<div>
	            <div class="CommentsAsync">
		        {this.state.comments.map(comment => <CommentAsync
			    key={this.state.index - this.state.comments.indexOf(comment)}
                            user={comment["user"]}
			    text={comment["text"]}/>)
			}
                    </div>
		    {next_button}
		</div>
        );
    }
}



class CommentAsync extends React.Component {
    render() {
        return (
            <div class="comment_async">
		<div class="user_async">{this.props.user}</div>
		<div class="comment_text_async">{this.props.text}</div>
	    </div>
	)
    }


}

