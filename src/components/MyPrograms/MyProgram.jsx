import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function MyPrograms(){
    const user = useSelector(store => store.user)
    const [MyPrograms, setPrograms] = useState([]);

    useEffect(() => {
        axios.get('/api/workoutProgram/userPrograms/').then((response) => {
            setPrograms(response.data)
        }).catch( error => {
            console.log('ERROR in 10 programs get: ',error);
        })
    }, [])

    return(
        <>
            <h1>{user.username}'s Workout Programs</h1>
            <ul>
                {MyPrograms.map((program, index) => {
                    return <li key={index} onClick={() => reviewProgram(program.id)}>{JSON.stringify(program)}</li>
                })}
            </ul>
        </>
    )
}

export default MyPrograms;