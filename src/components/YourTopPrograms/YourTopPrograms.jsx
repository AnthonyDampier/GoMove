import { useState, useEffect  } from 'react';
import { useSelector} from 'react-redux';
import axios from 'axios';

import './YourTopPrograms.css';



function YourTopPrograms(){
    const user = useSelector(store => store.user);
    const [programs, setPrograms] = useState([]);


    useEffect(() => {
        axios.get('/api/workoutProgram/TenPrograms').then((response) => {
            setPrograms(response.data)
        }).catch( error => {
            console.log('ERROR in 10 programs get: ',error);
        })
    }, []);


    return(
        <div className="your-program-performance">  
            <div id="top-programs title">
                <h2>
                    Top Program
                </h2>
                <h4>
                    by {user.username}
                </h4>
            </div>
            <table>
                <thead>
                    <tr>
                        <th id='table-title title-col'>Title</th>
                        <th id='table-user users-col'>Users</th>
                        <th id='table-edit edit-col'>View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="title-col">Program Title</td>
                        <td id="users-col">0</td>
                        <td id="edit-col">
                            <button id="table-btn"> view </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default YourTopPrograms;