import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import './MyPrograms.css';

function MyPrograms(){
    const history = useHistory();

    const user = useSelector(store => store.user)
    const [MyPrograms, setPrograms] = useState([]);

    useEffect(() => {
        axios.get('/api/workoutProgram/userPrograms/').then((response) => {
            setPrograms(response.data)
        }).catch( error => {
            console.log('ERROR in 10 programs get: ',error);
        })
    }, [])

    const reviewProgram = (id) => {
        console.log('review program');
        history.push({
            pathname: '/ReviewProgram/'+id,
        });
    }

    return(
        <center id="my-program-page">
        <div className="my-programs">
                <h1>{user.username}'s Workout Programs</h1>
                <table>
                    <thead>
                        <tr>
                            <th id='table-title'>Title</th>
                            <th id='table-genre'>Genre</th>
                            <th id='table-view'>View</th>
                        </tr>
                    </thead>
                    <tbody>
                    {MyPrograms.map((program, index) => {
                        return(
                            <tr key={index}>
                                <td className="title-col">{program.program_title}</td>
                                <td className="genre-col">{program.genre}</td>
                                <td className="view-col">
                                    <button
                                        id='view-btn'
                                        onClick={() => reviewProgram(program.id)}
                                        >View
                                    </button>
                                </td>
                            </tr>
                        )
                        // return <li key={index} >{JSON.stringify(program)}<button onClick={() => reviewProgram(program.id)}>View</button></li>
                    })}
                    </tbody>
                </table>
            </div>
        </center>
    )
}

export default MyPrograms;