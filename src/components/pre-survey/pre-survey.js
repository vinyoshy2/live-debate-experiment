import React from 'react';
import {Link} from "react-router-dom";
import "./pre-survey.css"
export default class Presurvey extends React.Component {

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
                where="D";
            }
	    if (this.props.bias == 1) {
                bias="P";
	    }
            return (
		 <div class="Presurvey">
                    <iframe src={"https://illinoisaces.co1.qualtrics.com/jfe/form/SV_3KT3AIUiAA0YunX?where="+where+"&bias="+bias} width="100%" height="100%"></iframe>
		    <h2>Please complete the survey in the box above to receive the passcode. Enter the passcode in the box below to proceed to video clip.</h2>
		    <label for="passcode_entry">Passcode: </label>
		    <input type="text" id="passcode_entry" onChange={this.handlePassCode}/>
		    { (this.state.passcode.trim() == "6499") ?
    	            <Link to="/second-instructions">
                        <button class="button-pre">
	                        Next
                        </button>
	                </Link> : <div/>
		    }
                 </div>
            );
    }
}

