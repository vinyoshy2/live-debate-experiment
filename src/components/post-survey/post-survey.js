import React from 'react';
import {Link} from "react-router-dom";
import "./post-survey.css"
export default class Postsurvey extends React.Component{
     render() {
	var where="A";
	var bias="M";
        if (this.props.mode == 1) {
            where="B"
	}
	if (this.props.bias == 1) {
            bias="P"
	}
        return (
                <div class="Postsurvey">
                    <iframe src={"https://illinoisaces.co1.qualtrics.com/jfe/form/SV_6tWB2UCM7OLmYOp?where="+where+"&bias="+bias} width="100%" height="100%"></iframe>
		    <h2>Please collect your post survey code before continuing. Make sure to hit the red arrow inside the survey box above.</h2>
	            <Link to="/end-slide">
                        <button class="button-post">
	                    Next
	                </button>
	            </Link>
                </div>
	    );
  }
}

