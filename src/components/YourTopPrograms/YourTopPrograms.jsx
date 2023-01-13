import { useState, useEffect  } from 'react';
import { useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './YourTopPrograms.css';



function YourTopPrograms(props){
    const user = useSelector(store => store.user);
    const history = useHistory();

    const handleViewClick = (id) => {
        history.push({
            pathname: '/ReviewProgram/'+id,
        });
    }


    // useEffect(() => {
    //     axios.get('/api/workoutProgram/byUserID/'+userId).then((response) => {
    //         setPrograms(response.data)
    //     }).catch( error => {
    //         console.log('ERROR in 10 programs get: ',error);
    //     })
    // }, []);


    return(
        <div className="your-program-performance">  
            <div id="top-programs title">
                <h2>
                    Programs
                </h2>
                <h4>
                    by {user.username}
                </h4>
            </div>
            <table>
                <thead>
                    <tr>
                        <th id='user-top-program-title'>Title</th>
                        {/* <th id='table-user users-col'>Users</th> */}
                        <th id='table-view'>View</th>
                    </tr>
                </thead>
                <tbody>
                    {props.programs.map((programs, index) => {
                        return(
                        <tr key={index}>
                            <td id='user-top-program-title'>{programs.program_title}</td>
                            {/* <td id="users-col">0</td> */}
                            <td id="view-col">
                                <button 
                                    value={programs.id} 
                                    id="table-btn"
                                    onClick={(event) => handleViewClick(event.target.value)}> 
                                    view 
                                </button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default YourTopPrograms;