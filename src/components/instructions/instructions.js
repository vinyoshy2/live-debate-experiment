import React from 'react';
import {
	Link
} from "react-router-dom";
import "./instructions.css"

export default class Instructions extends React.Component {
    render() {
	if (this.props.mode == 1) {
            return (
                <div class="Instructions">
                    <h1>Instructions</h1>
	            <ol>
	                <li>After hitting next, you will be asked to fill out a <b>short survey</b> about a few government policies. This should take only a few minutes. After completing this survey, you will receive a <b>4 digit code</b> you will need to enter in order to proceed to the next page </li> 
	                <li>You will next be shown a <b>9-minute video clip</b> from a past Democratic debate. Attached to this video will be a a set of comments that were posted on the internet while the debate was being aired. Please <b>read the comments while watching the video</b>. When the video is done playing, you will be able to proceed.</li> 
	                <li>At this point you will have completed the study! On this page you will be given an <b>8 digit completion code</b> you will need to <b>enter on Proflic</b> in order to receive payment for the study. Please direct any questions or concerns you have to vkoshy2@illinois.edu.</li>
	            </ol>
                    <Link to="/pre-survey">
                        <button class="button-instructions">
	                     Next
	                </button>
	            </Link>
                </div>
            );
	} else {
              return (
                <div class="Instructions">
                    <h1>Instructions</h1>
	            <ol>
	                <li>After hitting next, you will be asked to fill out a <b>short survey</b> about a few government policies. This should take only a few minutes or so. After completing this survey, you will receive a <b>4 digit code</b> you will need to enter in order to proceed to the next page </li> 
	                <li>You will next be shown a <b>9-minute video clip</b> from a past Democratic debate. When the video is done playing, you will be to proceed.</li> 
		        <li> After this you will be shown some comments posted by users when the debate was aired. <b>It is not expected that you read every comment word-for-word</b>, but please <b>spend 2-3 minutes</b> reading through the comments before proceeding to the next step </li>
	                <li>After the video is finished, you will be asked to complete a <b>questionnaire about the video and the comments</b> you were shown. We will collect some <b>demographic information</b> here as well. This should take a few minutes. You will again be given a <b>4 digit code</b> you will need to enter in order to proceed to the next page</li> 
	                <li>At this point you will have completed the study! On this page you will be given an <b>8 digit completion code</b> you will need to <b>enter on Proflic</b> in order to receive payment for the study. Please direct any questions or concerns you have to vkoshy2@illinois.edu.</li>
	            </ol>
                    <Link to="/pre-survey">
                        <button class="button-instructions">
	                     Next
	                </button>
	            </Link>
                </div>
            );
	}
    }
}

