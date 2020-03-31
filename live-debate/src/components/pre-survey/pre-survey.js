import React from 'react';
import {Link} from "react-router-dom";
import "./pre-survey.css"
import VideoComments from "../video-comments/video-comments.js"
export default function Presurvey() {
    return (
        <div class="Presurvey">
            <iframe src="https://qtrial2019q3az1.az1.qualtrics.com/jfe/form/SV_82EPvRAnXArHw5n" width="1280px" height="720px"></iframe>
	<Link to="/video-comments">
            <button class="button">
	        Next
	    </button>
	</Link>
        </div>
  );
}

