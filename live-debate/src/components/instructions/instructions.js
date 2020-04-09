import React from 'react';
import {
	Link
} from "react-router-dom";
import "./instructions.css"

export default function Instructions() {
    return (
        <div class="Instructions">
            <h1>Instructions</h1>
	    <ol>
	        <li>After hitting next, you will be asked to fill out a <b>short survey</b> on your political views. This should take only a couple of minutes</li> 
	        <li>You will next be shown a <b>10-minute video clip</b> from a past Democratic debate. Attached to this video will be a <b>replay of comments</b> that were posted on the internet live when the debate was aired.</li> 
	        <li>After the video is finished, you will be asked to complete a <b>questionaire about the video and the comments</b> you were shown. We will collect some <b>demographic information</b> here as well. This should take about 6 minutes. </li> 
	        <li>You will then be taken a page where you will be asked to input your <b>Mturk worker ID</b>. This will generate a <b>code you can submit at the original HIT</b> to receive payment!</li>
	    </ol>
            <Link to="/pre-survey">
                <button class="button">
	                Next
	            </button>
	        </Link>
        </div>
  );
}

