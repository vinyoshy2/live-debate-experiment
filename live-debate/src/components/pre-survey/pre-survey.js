import React from 'react';
import {Link} from "react-router-dom";
import "./pre-survey.css"
export default class Presurvey extends React.Component {

    function constructor(props) {
        super(props);
    }

    function render() {
	if (props.mode == 0) {
            return (
                <div class="Presurvey">
                    <iframe src="https://qtrial2019q3az1.az1.qualtrics.com/jfe/form/SV_82EPvRAnXArHw5n?where=A" width="1280px" height="720px"></iframe>
    	            <Link to="/video">
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

