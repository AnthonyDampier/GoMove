import { useEffect, useState} from "react";
import ExerciseLoop from "../ReviewExercise/ReviewExercise";
import axios from "axios";

function ReviewExercises(props){
    const [exerciseType, setExerciseType] = useState();
    const editState= props.editState;


    useEffect(() => {
        // axios.get('/api/workoutProgram/exerciseType/'+props.programId+'/'+props.sessionId+'/'+props.exerciseId).then(response =>{ setExerciseType(response.data[0].exercise_name)}).catch(error => console.log(error));
        // axios.get('/api/workoutProgram/distinctExerciseIds/'+Number(id.id)+'/'+ selectedSessionId).then(response =>{ setExerciseIds(response.data)}).catch(error => console.log(error));
    }, [props]);


    return(
        <div className="exercises" >  
            <h1>Exercise Id: {JSON.stringify(props.exercise_name)}</h1>
            <h2>Exercise Type: {props.exerciseType}</h2>
            <ExerciseLoop programId={props.programId} sessionId={props.sessionId} exerciseId={props.exerciseId} editState={props.editState}/>
        </div>
    )
}

export default ReviewExercises;