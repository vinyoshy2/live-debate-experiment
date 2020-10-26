import React from 'react';
import {Link} from "react-router-dom";
import "./pre-survey.css"
export default class Presurvey extends React.Component {

    render() {
	    var where="A";
	    var bias="M";
	    if (this.props.mode == 1) {
                where="B";
            }
	    if (this.props.bias == 1) {
                bias="P";
	    }
            return (
		 <div class="Presurvey">
                    <iframe src={"https://illinoisaces.co1.qualtrics.com/jfe/form/SV_3KT3AIUiAA0YunX?where="+where+"&bias="+bias} width="100%" height="100%"></iframe>
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

