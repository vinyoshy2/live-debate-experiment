import React from 'react';
import {Link} from "react-router-dom";
import "./pre-survey.css"
export default class Presurvey extends React.Component {

    render() {
	if (this.props.mode == 0) {
            return (
                <div class="Presurvey">
                    <iframe src="https://qtrial2019q3az1.az1.qualtrics.com/jfe/form/SV_82EPvRAnXArHw5n?where=A" width="1280px" height="720px"></iframe>
		    <h2>Please collect your pre survey code before continuing. Make sure to hit the red arrow inside the survey box above.</h2>
    	            <Link to="/second-instructions">
                        <button class="button-pre">
	                    Next
                        </button>
	            </Link>
                 </div>
            );
        } else {
            return (
                <div class="Presurvey">
                    <iframe src="https://qtrial2019q3az1.az1.qualtrics.com/jfe/form/SV_82EPvRAnXArHw5n?where=B" width="1280px" height="720px"></iframe>
		    <h2>Please collect your pre survey code before continuing. Make sure to hit the red arrow inside the survey box above.</h2>
    	            <Link to="/second-instructions">
                        <button class="button-pre">
	                    Next
                        </button>
	            </Link>
                 </div>
	    );
	}
    }
}

