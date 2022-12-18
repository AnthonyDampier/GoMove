import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
//import jsx
import YourTopPrograms from '../YourTopPrograms/YourTopPrograms';
import ListOfTenPrograms from '../ListOfTenPrograms/ListOfTenPrograms';

//import css
import './UserPage.css'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      {/* <p>Your ID is: {user.id}</p> */}
      <div id="section" className="user-page">
          <ListOfTenPrograms/>
        <div id="container" className="your-program-performance">
          <YourTopPrograms/>
        </div>
      </div>
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
