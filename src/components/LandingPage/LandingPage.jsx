import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './LandingPage.css';

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';
import ListOfTwentyPrograms from '../HomeProgramsDisplay/ListOfPrograms'


function LandingPage() {
  const history = useHistory();

  const user = useSelector(store => store.user);
  // console.log(user);

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
        <center>
          <div className="welcome-note">
            <img src={require('../../images/BuildMuscle.jpg')}/>
            <div id='message'>
              <p>
              Welcome!
              </p>
              <p> 
              We are so excited that you have decided to join our web application. 
              As a personal trainer, you have the unique opportunity to help your clients achieve their health 
              and fitness goals and improve their overall quality of life. 
              </p>
              <p>
              We believe that our platform can support 
              and enhance your work as a trainer by providing a range of tools and resources to help you plan and 
              track your clients' progress, communicate with them effectively, and grow your business. We hope that you 
              find our platform useful and we look forward to seeing the positive impact that you have on your clients' 
              health and well-being.
              </p>

              <p>
              We believe that our platform can support 
              and enhance your work as a trainer by providing a range of tools and resources to help you plan and 
              track your clients' progress, communicate with them effectively, and grow your business. We hope that you 
              find our platform useful and we look forward to seeing the positive impact that you have on your clients' 
              health and well-being.
              </p>
            </div>
          </div>
          {/* {!user.id && 
          <ListOfTwentyPrograms/>
          } */}
        </center>
    </div>
  );
}

export default LandingPage;
