import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
//import jsx
import YourTopPrograms from '../YourTopPrograms/YourTopPrograms';
import ListOfTwentyPrograms from '../ListOfProgramsTable/ListOfPrograms.jsx';

//import css
import './Home.css'
// import CreateProgramPage from '../CreateProgram/CreateProgramPage';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  
  return (
    <div>
      {/* <h1>Welcome, {user.username}!</h1> */}
      {/* <p>Your ID is: {user.id}</p> */}
      <div className="user-page">
          <ListOfTwentyPrograms/>
          {user.id && (
            <>
              <YourTopPrograms/>
            </>
            )
          }
      </div>
      {/* <LogOutButton className="btn" /> */}
      {/* <div>
        <CreateProgramPage/>
      </div> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
