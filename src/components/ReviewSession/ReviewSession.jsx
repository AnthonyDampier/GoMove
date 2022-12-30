import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Exercise from "../ReviewExercises/ReviewExercises";

function ReviewSession(props){
    const programInternal = props.programInternal;
    const selectedSessionId = props.selectedSessionId;
    const exerciseTypes = props.exerciseTypes;
    const [exerciseIds, setExerciseIds] = useState([]);
    let sessionArray = [];

    const id = useParams();

    useEffect(() => {
        // programInternal = props.programInternal;
        // selectedSessionId = props.selectedSessionId;
    }, [props]);

    useEffect(() => {
        axios.get('/api/workoutProgram/distinctExerciseIds/'+Number(id.id)+'/'+ selectedSessionId).then(response =>{ setExerciseIds(response.data)}).catch(error => console.log(error));
    }, []);

    return (
        <div className="session">  
            <h1>Session: {selectedSessionId}</h1>
            {/* <h2>{JSON.stringify(id.id)}</h2> */}
            {/* <h3>{JSON.stringify(exerciseIds)}</h3> */}
            {exerciseIds.map((item, index) => {
                    return (
                        <Exercise programId={id.id} sessionId={selectedSessionId} exerciseId={item.exercise_id} exerciseTypes={exerciseTypes} key={index}/>
                    )
            })}
        </div>
    )
}

export default ReviewSession;