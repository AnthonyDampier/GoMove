import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation} from 'react-router-dom';

import LogOutButton from '../LogOutButton/LogOutButton';

import './Nav.css';

function Nav(props) {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const numOfUnapprovedPrograms = useSelector(store => store.unapprovedPrograms.length);

  dispatch({type: 'FETCH_UNAPPROVED_PROGRAMS'});

  // assigned current path name to variable
  const pathname = useLocation().pathname;
  //removes "/" from front of path
  const splitLocation = pathname.split("/");
  console.log("location ",splitLocation[1]);

  useEffect(() => {
    // TODO dispatch fetch all unapproved programs
    dispatch({type: 'FETCH_UNAPPROVED_PROGRAMS'});
    
  }, [numOfUnapprovedPrograms]);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">GoMove</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
            <Link 
              className="navLink" 
              to="/home"
              id={splitLocation[1] === "home" ? "active" : "" }
              >
                Home
            </Link>
            <Link 
              className="navLink" 
              to="/login"
              id={splitLocation[1] === "login" || "registration" ? "active" : "" } 
              >
              Login / Register
            </Link>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
          {/* <h1>Unapproved: {JSON.stringify(numOfUnapprovedPrograms)}</h1> */}
            <Link 
              className="navLink home-nav" 
              to="/home"
              id={splitLocation[1] === "home" ? "active" : "" } 
              >
              Home
            </Link>
            <Link 
              className="navLink" 
              to="/MyPrograms"
              id={splitLocation[1] === "MyPrograms" ? "active" : "" } 
              >
              My Programs
            </Link>
            <Link 
              className="navLink" 
              to="/CreateProgram"
              id={splitLocation[1] === "CreateProgram" ? "active" : "" } 
              >
              Create New Program
            </Link>
            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}
            {user.access_level>0 && (
              <Link 
                className="navLink" 
                to="/Admin"
                id={splitLocation[1] === "Admin" ? "active" : "" } 
                >
                Admin 
                {numOfUnapprovedPrograms > 0 && 
                  <span id="admin-notification">{JSON.stringify(numOfUnapprovedPrograms)}</span>
                }
              </Link>
            )

            }
            <LogOutButton className="navLink" to="/login"/>
          </>
        )}
        {/* <Link className="navLink" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
