import React from 'react';
import logo from '../../logo.svg';
import './consent.css';

export default function Consent() {
  return (
    <div class="Consent">
          <h1 align='center'>Online Informed Consent Document</h1>
	  <p>Project Title: Measuring Opinion on Healthcare during the Democratic Debates</p>
	  <p>Principle Investigator: Karrie Karahalios (Computer Science, University of Illinois at Urbana-Champaign)</p>

	  <h2>What is the purpose of this study?</h2>  
	  <p>This is a research study to be conducted at the Siebel Center at University of Illinois.  We are inviting you to participate in this research study because you have indicated that you have watched a Democratic debate some time in the last year.</p>
	  <p>The study aims to understand people’s opinions on healthcare in the United States. If you agree to participate, you will be asked to sign this informed consent document indicating that you have read the following form and have been given the goals of this study.</p>

	  <h2>How many people will participate in this study?</h2>
	  <p>Approximately 200 people will take part in this study.</p>	  
	  
	  <h2>How long will I be in this study?</h2>
	  <p>If you agree to take part in this study, your involvement will be around 23 minutes</p>
	  
	  <h2>What will happen during this study?</h2>
	  <p>You will complete the following:</p>
	  <ol>
	      <li>A pre-survey in which you will provide some demographic information, and answer a few questions about your political views and enagement level. (~3 minutes)</li>
	      <li>Watch a 10-minute debate clip and read comments posted about that clip (~10-15 minutes)</li>
	      <li>A post-survey containing questions about your opinions on content expressed in the video/associated comments (~5 minutes)</li>
	      <li>You will receive a password to submit on Amazon Mechanical Turk in order to be paid for completing this study</li>
	  </ol>
	  
	  <h2>What are the risks of this study?</h2>
	  <p>There are no foreseeable risks to you beyond those normally encountered in your daily life while participating in this study.</p>
	  
	  <h2>What are the benefits of this study?</h2>
	  <p>The feedback received from the study will be used to gauge the political opinions of Americans on healthcare</p>
	  
	  <h2>Will I be paid for participating?</h2>
	  <p>You will be paid $5.75 for participating in this study.</p>
	  
	  <h2>Will it cost me anything to be in this study?</h2>
	  <p>There are no costs for being in this study other than your time.</p>
	  
	  <h2>What about confidentiality?</h2>
	  <p>We will keep your participation in this research study confidential. However, it is possible that other people may become aware of your participation in the study. For example, representatives of the university committee and office that reviews and approves research studies, the Institutional Review Board (IRB) and <a href="https://directory.illinois.edu/detail?departmentId=illinois.eduNE344&search_type=all&skinId=0&sub=">Office for Protection of Research Subjects</a>, Other representatives of the state and university responsible for ethical, regulatory, or financial  oversight of research, may inspect and copy records pertaining to this study. All study participants will be given an interviewee number with which they will be referred to, thereby reducing personal identification of participants. We will maintain an identity key connecting an interviewee’s name to his or her number, which will be kept in a locked drawer a different office. This key will be destroyed at the end of the study. If we write a report or article about this study, we will generally describe the study results in a summarized manner so that you cannot be personally identified. All data will be kept in a password-protected computer that is locked up so that only the researchers involved in this project will have access to the data. The audio and screen capture data will also be anonymized.</p>
	  
	  <h2>How will the data be used in the future?</h2>
	  <p>Your de-identified information could be used for future research without additional informed consent.</p>
	  
	  <h2>Is being in this study voluntary?</h2>
	  <p>Taking part in this research study is completely voluntary. You may choose not to take part at all.  However, you must be 18 or older in order to participate. If you decide to be in this study, you may stop participating at any time.  If you decide not to be in this study, or if you stop participating at any time, you won’t be penalized or lose any benefits for which you otherwise qualify. Your decision to participate, decline, or withdraw from participation will have no effect on your grades at, current status, or future relations with the University of Illinois.</p>
	  
	  <h2>What if I have questions?</h2>
	  <p>We encourage you to ask questions.  If you have any questions about the research study itself, please contact:  Karrie Karahalios at kkarahal@illinois.edu or call (217) 265-6841.  If you feel you have not been treated according to the descriptions in this form, or if you have any questions about your rights as a research subject, including questions, concerns, complaints, or to offer input, you may call the Office for the Protection of Research Subjects (OPRS) at 217-333-2670 or e-mail OPRS at irb@illinois.edu</p>
	  
      <h3>I have read and understand the above consent form. I certify that I am 18 years
old or older. By clicking the “I agree” button to enter the survey, I indicate my 
willingness to voluntarily take part in this study.
</h3>
    
	  	  	  	  	  
	  <button class="button">
	    I agree!
	  </button>  
    </div>
  );
}

