import { useEffect, useState} from "react";
import ExerciseLoop from "../ReviewExercise/ReviewExercise";
import axios from "axios";
import ExerciseTypeOptions from "../ExerciseTypeOptions/ExerciseTypeOptions";

function ReviewExercises(props){
    const [exerciseTypeId, setExerciseType] = useState(props.exerciseTypeId);
    const editState= props.editState;

    const changeExercise = (workoutType) => {
        setExerciseType(workoutType);
    }

    useEffect(() => {
        // axios.get('/api/workoutProgram/exerciseType/'+props.programId+'/'+props.sessionId+'/'+props.exerciseId).then(response =>{ setExerciseType(response.data[0].exercise_name)}).catch(error => console.log(error));
        // axios.get('/api/workoutProgram/distinctExerciseIds/'+Number(id.id)+'/'+ selectedSessionId).then(response =>{ setExerciseIds(response.data)}).catch(error => console.log(error));
    }, [props]);


    return(
        <div className="exercises" >  
            <h1>Exercise Id: {JSON.stringify(exerciseTypeId)}</h1>
            <h2>Exercise Type: {!props.editState ? props.exerciseType : <select onChange={(event) => changeExercise(event.target.value)}><ExerciseTypeOptions/></select>}</h2>
            <ExerciseLoop 
                programId={props.programId} 
                sessionId={props.sessionId} 
                exerciseId={props.exerciseId} 
                exerciseTypeId={exerciseTypeId} 
                editState={props.editState}
            />
        </div>
    )
}

export default ReviewExercises;