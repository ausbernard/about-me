import React from 'react';
import monstar from './utilities/monstar.png';
import thoughtbubble from './utilities/thoughtbubble.png';


function AboutMe() {
  return (
    <div className="about-me">
        <h1>hi, im austin</h1>
        <p>i code from time to time. <br></br></p>
        <br></br>       
        <br></br>
        <img className='monstar' src={monstar} alt="monstar" />
        <img className="thought-bubble" src={thoughtbubble} alt="thought bubble" />
    </div>
  );
}

export default AboutMe;