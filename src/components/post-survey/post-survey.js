import React from 'react';
import {Link} from "react-router-dom";
import "./post-survey.css"
export default class Postsurvey extends React.Component {
    constructor(props) {
        super(props);
	    this.state = {
	        passcode : ""
	    }
	    this.handlePassCode = this.handlePassCode.bind(this);
    }
    
    handlePassCode(event) {
        this.setState({ passcode : event.target.value });
    }
    render() {
	    var where="S";
	    var bias="M";
        if (this.props.mode == 1) {
            where="D"
	    }
	    if (this.props.bias == 1) {
            bias="P"
	    }
        return (
            <div class="Postsurvey">
                <iframe src={"https://illinoisaces.co1.qualtrics.com/jfe/form/SV_6tWB2UCM7OLmYOp?where="+where+"&bias="+bias} width="100%" height="100%"></iframe>
		        <h2>Please complete the survey in the box above to receive your second passcode. Enter the passcode in the box below to proceed.</h2>
		        <label for="passcode_entry2">Second Passcode: </label>
		        <input type="text" id="passcode_entry2" onChange={this.handlePassCode}/>  
		        { (this.state.passcode.trim() == "4311") ?
	                <Link to="/end-slide">
                        <button class="button-post">
	                        Next
	                    </button>
	                </Link> : <div/>
	            }
            </div>
	    );
      }
}

