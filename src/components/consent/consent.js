import React from 'react';
import './consent.css';
import {
	Link
} from "react-router-dom";

export default function Consent() {
  return (
    <div class="Consent">
          <h1 align='center'>Online Informed Consent Document</h1>
	  <p>Project Title: Measuring Ability of Politicians to Communicate Policy</p>
	  <p>Principle Investigator: Karrie Karahalios (Computer Science, University of Illinois at Urbana-Champaign)</p>

      <p>You are being asked to participate in a voluntary research study. The purpose of this study is to understand how effectively politicians are able to communicate their positions on policy. Participating in this study will involve:
      <ol>
	      <li>A pre-survey in which you will provide some demographic information, and answer a few questions about your political views and enagement level. (~1 minutes)</li>
	      <li>Watching a 12-minute debate clip and read comments posted about that clip (~10-15 minutes)</li>
	      <li>A post-survey containing questions about your opinions on content expressed in the video/associated comments (~5 minutes)</li>
	      <li>After completing these components, you will receive an 8-digit completion code to submit on Prolific</li>
	  </ol>	  
	  
      and your participation will last around 20 minutes. Risks related to this research include only those normally encountered in your daily life; benefits related to this research include a better understand how policy positions can better be conveyed to Americans, leading to a more informed populace. The alternative to participating in this study is to return the task on Prolific.</p>

	  <h2>What is the purpose of this study?</h2>  
	  <p>This is a research study to be conducted at the Siebel Center at University of Illinois.  We are inviting you to participate in this research study because you have indicated that you have watched a Democratic debate some time in the last year.</p>
	  <p>The study aims to understand how effectively politicians are able to communicate their positions on policy. If you agree to participate, you will be asked to sign this informed consent document indicating that you have read the following form and have been given the goals of this study.</p>
	  
	  <h2>How many people will participate in this study?</h2>
	  <p>Approximately 200 people will take part in this study.</p>	 
	  
	  <h2>How long will I be in this study?</h2>
	  <p>If you agree to take part in this study, your involvement will be around 20 minutes</p> 
	  
	  <h2>What are the risks of this study?</h2>
	  <p>While participating in this study, there are no foreseeable risks to you beyond those you encounter in every day life</p>
	  
	  <h2>What are the benefits of this study?</h2>
	  <p>The feedback received from the study will be used to understand how policy positions can better be conveyed to Americans, leading to a more informed populace</p>
	  
	  <h2>Will I be paid for participating?</h2>
	  <p>You will be paid $3.60 for participating in this study.</p>
	  
	  <h2>Will it cost me anything to be in this study?</h2>
	  <p>There are no costs for being in this study other than your time.</p>
	  
	  <h2>What about confidentiality?</h2>
	  <p>We will keep your participation in this research study confidential. However, it is possible that other people may become aware of your participation in the study. For example, representatives of the university committee and office that reviews and approves research studies, the Institutional Review Board (IRB) and <a href="https://directory.illinois.edu/detail?departmentId=illinois.eduNE344&search_type=all&skinId=0&sub=">Office for Protection of Research Subjects</a>, Other representatives of the state and university responsible for ethical, regulatory, or financial  oversight of research, may inspect and copy records pertaining to this study. All personally identifiable data will only be reported in aggregate and will be deleted as soon as possible. Your survey responses will be stored on a secure sever, and will be anonymized.  </p>
	  
	  <h2>How will the data be used in the future?</h2>
	  <p>Your de-identified information could be used for future research without additional informed consent.</p>
	  
	  <h2>Is being in this study voluntary?</h2>
	  <p>Taking part in this research study is completely voluntary. You may choose not to take part at all.  However, you must be 18 or older in order to participate. If you decide to be in this study, you may stop participating at any time.  If you decide not to be in this study, or if you stop participating at any time, you won’t be penalized or lose any benefits for which you otherwise qualify. Your decision to participate, decline, or withdraw from participation will have no effect on your grades at, current status, or future relations with the University of Illinois.</p>
	  
	  <h2>What if I have questions?</h2>
	  <p>We encourage you to ask questions.  If you have any questions about the research study itself, please contact:  Karrie Karahalios at kkarahal@illinois.edu or call (217) 265-6841.  If you feel you have not been treated according to the descriptions in this form, or if you have any questions about your rights as a research subject, including questions, concerns, complaints, or to offer input, you may call the Office for the Protection of Research Subjects (OPRS) at 217-333-2670 or e-mail OPRS at irb@illinois.edu</p>
	  
      <h3>I have read and understand the above consent form. I certify that I am 18 years
old or older. By clicking the “I agree” button to enter the survey, I indicate my 
willingness to voluntarily take part in this study.</h3>
    
          <Link to="/instructions">	  
            <button class="button-consent">
	      I agree!
	    </button>
	  </Link>
    </div>
  );
}

