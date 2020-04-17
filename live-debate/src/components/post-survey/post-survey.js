import React from 'react';
import {Link} from "react-router-dom";
import "./post-survey.css"
export default class Postsurvey extends React.Component{
     render() {
        if (this.props.mode == 0) {
            return (
                <div class="Postsurvey">
                    <iframe src="https://qtrial2019q4az1.az1.qualtrics.com/jfe/form/SV_4MCNerPitkUU3CB?where=A" width="1280px" height="720px"></iframe>
		    <h2>Please collect your post survey code before continuing. Make sure to hit the red arrow inside the survey box above.</h2>
	            <Link to="/end-slide">
                        <button class="button-post">
	                    Next
	                </button>
	            </Link>
                </div>
	    );
	} else {
            return (
		<div>
                    <div class="Postsurvey">
                        <iframe src="https://qtrial2019q4az1.az1.qualtrics.com/jfe/form/SV_4MCNerPitkUU3CB?where=B" width="1280px" height="720px"></iframe>
		    <h2>Please collect your post survey code before continuing. Make sure to hit the red arrow inside the survey box above.</h2>
                    </div>
	            <Link to="/end-slide">
                        <button class="button-post">
	                    Next
   	                </button>
                    </Link>
		</div> 
	    );


	}
  }

}

