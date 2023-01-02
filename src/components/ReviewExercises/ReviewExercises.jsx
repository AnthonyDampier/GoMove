import { useEffect, useState} from "react";
import ExerciseLoop from "../ReviewExercise/ReviewExercise";
import axios from "axios";

function ReviewExercises(props){
    const [exerciseType, setExerciseType] = useState();


    useEffect(() => {
        axios.get('/api/workoutProgram/exerciseType/'+props.programId+'/'+props.sessionId+'/'+props.exerciseId).then(response =>{ setExerciseType(response.data[0].exercise_name)}).catch(error => console.log(error));
        // axios.get('/api/workoutProgram/distinctExerciseIds/'+Number(id.id)+'/'+ selectedSessionId).then(response =>{ setExerciseIds(response.data)}).catch(error => console.log(error));
    }, [props]);


    return(
        <div className="exercises" >  
            {/* <h1>Exercise Id: {JSON.stringify(props.exerciseId)}</h1> */}
            <h2>Exercise Type: {exerciseType}</h2>
            <ExerciseLoop programId={props.programId} sessionId={props.sessionId} exerciseId={props.exerciseId}/>
            <div>
                <button>Save / EDIT</button>
            </div>
        </div>
    )
}

export default ReviewExercises;