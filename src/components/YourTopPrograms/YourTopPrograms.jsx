import { useState, useEffect  } from 'react';
import { useSelector} from 'react-redux';
import axios from 'axios';

import './YourTopPrograms.css';



function YourTopPrograms(){
    const user = useSelector(store => store.user);
    const [programs, setPrograms] = useState([]);
    const userId = useSelector(store => store.user.id);


    useEffect(() => {
        axios.get('/api/workoutProgram/byUserID/'+userId).then((response) => {
            setPrograms(response.data)
        }).catch( error => {
            console.log('ERROR in 10 programs get: ',error);
        })
    }, []);


    return(
        <div className="your-program-performance">  
            <div id="top-programs title">
                <h2>
                    Top 5 Program
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
                        <th id='table-edit edit-col'>View</th>
                    </tr>
                </thead>
                <tbody>
                    {programs.map((programs, index) => {
                        return(
                        <tr key={index}>
                            <td id='user-top-program-title'>{programs.program_title}</td>
                            {/* <td id="users-col">0</td> */}
                            <td id="edit-col">
                                <button value={programs.id} id="table-btn"> view </button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default YourTopPrograms;