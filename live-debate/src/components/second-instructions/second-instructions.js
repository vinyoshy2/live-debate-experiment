import React from 'react';
import {
	Link
} from "react-router-dom";
import "./second-instructions.css"

export default class SecondInstructions() extends React.Component {
    function constructor(props) {
        super(props);
    }
    function render() {
	    if (this.props.mode == 1) {
                return (
                    <div class="SecondInstructions">
                        <h1>Video Instructions</h1>
	                <ol>
	                    <li>On the right is a screenshot of the interface you will see on the next page. Hitting the "Refresh comments" button will display user submitted associated with the current time in the video. </li> 
	                    <li>Please browse the comments while watching the video, and <b>make sure to refresh them periodically</b>.</li> 
	                    <li>The video will begin to play as soon as you hit next. <b>Make sure your audio is on</b>, and that you are on a desktop computer. </li>
	                </ol>
                        <Link to="/video-comments">
                            <button class="button-second">
	                         Next
	                    </button>
	                </Link>
                    </div>
                );
	    } else {
                return (
                    <div class="SecondInstructions">
                        <h1>Video Instructions</h1>
	                <ol>
	                    <li>The video will begin to play as soon as you hit next. <b>Make sure your audio is on</b>, and that you are on a desktop computer. </li>
			    <li>You will be able to proceed to the comments section once the video has completed.</li>
	                </ol>
                        <Link to="/video">
                            <button class="button-second">
	                         Next
	                    </button>
	                </Link>
                    </div>

		);

	    }
        }
    }
}

