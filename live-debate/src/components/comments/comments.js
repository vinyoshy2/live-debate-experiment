import React from 'react';
import {
	Link
} from "react-router-dom";
import "./comments.css";
import commentJSON from "../../data/json/comments.json";

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
	this.state = {
	    comments: commentJSON["entries"],
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

