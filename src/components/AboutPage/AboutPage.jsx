import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="about-us container">
      <div className="developer">
        <img src={require("../../images/porfolioHeadShot.jpeg")}/>
        <div id="message">
          <div id="header">
            <h2>Anthony Dampier</h2>
            <div className='professional-links'>
              <div id="links">
                <a href="https://www.linkedin.com/in/anthonydampier/" targat="_blank" rel="noreferrer">
                  <img src={require("../../images/logos/LI-In-Bug.png")}/>
                </a>
                <a href="https://github.com/AnthonyDampier" targat="_blank" rel="noreferrer">
                  <img src={require("../../images/logos/github-mark.png")}/>
                </a>
              </div>
            </div>
          </div>
          <h4>Full Stack Application Developer</h4>
          <p>
            After years of writing my workouts in notebooks, saving them in mobile phone notes, and struggling the remember what comes next; I create GoMove.
          </p>
          <p>
            GoMove is an Application built to make exercise programming and referencing said exercise program easier for individuals, Personal Trainers, Physical Therapists, and Physical Rehabilitation.
          </p>
          
        </div>
      </div>
      <div className='tech'>
        <h5>Technology Used</h5>
        <img 
          id="css" 
          alt="CSS"
          src={require('../../images/logos/css-logo.png')}/>
        <img 
          id="JS" 
          alt="JS"
          src={require('../../images/logos/Unofficial_JavaScript_logo_2.svg.png')}/>
        <img 
          id="HTML" 
          alt="HTML"
          src={require('../../images/logos/html.png')}/>
        <img 
          id="nodeJS" 
          alt="nodeJS"
          src={require('../../images/logos/nodejs-logo-065257DE24-seeklogo.com.png')}/>
        <img 
          id="postgres" 
          alt="postgres"
          src={require('../../images/logos/postgres.png')}/>
        <img 
          id="postman" src={require('../../images/logos/postman-logo-F43375A2EB-seeklogo.com.png')}/>
        <img 
          alt="postman"
          id="vsCode" src={require('../../images/logos/vscode.png')}/>
        <img 
          id="git" 
          alt="git"
          src={require('../../images/logos/github-mark.png')}/>
        <img 
          id="figma" 
          alt="figma"
          src={require('../../images/logos/figma.png')}/>
        <img 
          id="react" 
          alt="reactjs"
          src={require('../../images/logos/react-logo-7B3CE81517-seeklogo.com.png')}/>
        <img 
          id="passport" 
          alt="passportJS"
          src={require('../../images/logos/passport-logo.png')}/>
      </div>
    </div>
  );
}

export default AboutPage;
