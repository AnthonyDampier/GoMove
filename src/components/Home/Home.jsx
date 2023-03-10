import React, {useState, useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
//import jsx
import YourTopPrograms from '../YourTopPrograms/YourTopPrograms';
import ListOfTwentyPrograms from '../HomeProgramsDisplay/ListOfPrograms.jsx';
import LandingPage from '../LandingPage/LandingPage';

//import css
import './Home.css'
// import CreateProgramPage from '../CreateProgram/CreateProgramPage';

function UserPage() {
  const dispatch = useDispatch();

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const [programs, setPrograms] = useState([]);
  // console.log(user);
  
  useEffect(() => {
    if(user.id){
      axios.get('/api/workoutProgram/byUserID/'+user.id).then((response) => {
          setPrograms(response.data)
      }).catch( error => {
          console.log('ERROR in 10 programs get: ',error);
      })
    }

    if(user.access_level >= 1){
      dispatch({type: 'FETCH_UNAPPROVED_PROGRAMS'});
    }
  }, []);
  
  return (
    <div className={!user.id ? "changeBackground" : ""}>
      {/* <h1>Welcome, {user.username}!</h1> */}
      {/* <p>Your ID is: {user.id}</p> */}
      <LandingPage/>
      <div className="home-page">
      {user.id && 
          (<>
              <ListOfTwentyPrograms/>
              <YourTopPrograms programs={programs}/>
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
