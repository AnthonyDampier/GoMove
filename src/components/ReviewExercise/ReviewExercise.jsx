import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import ReviewSet from "../ReviewSet/ReviewSet";



function ReviewExercise(props){
    const id = useParams();
    // console.log('id',id);
    const [setInfo, setSetInfo] = useState([]);

    const getExerciseType = (exerciseId) => {
        // console.log('typeId:', session.exercise_type);
        for (let exerciseType of exerciseTypes){
            if(Number(exerciseType.id) == Number(exerciseId)){
                return `${exerciseType.exercise_name}`;
            }
        }
    }

    useEffect(()=>{
        axios.get('/api/workoutProgram/setIds/'+props.programId+'/'+props.sessionId+'/'+props.exerciseId)
        .then(response =>{ setSetInfo(response.data)})
        .catch(error => console.log(error));
    }, [])

    return(
        <div className="exercise">
            {/* <h1>{JSON.stringify(props)}</h1> */}
            {/* <h2>{JSON.stringify(setInfo)}</h2> */}
            {/* <h3>Exercise: {getExerciseType(exercise.exercise_type)}</h3> */}
            {
                setInfo.map((set,index) => {
                    return(<ReviewSet 
                        editState={props.editState}
                        programId={props.programId} 
                        sessionId={props.sessionId} 
                        exerciseId={props.exerciseId}
                        exerciseTypeId={props.exerciseTypeId} 
                        setId={set.set_id} 
                        reps={set.reps} 
                        percentOfMax={set.percent_of_max*100} 
                        key={index}
                    />)
                    // return(<h4>{JSON.stringify(set.set_id)}</h4>)
                })
            }
        </div>
    )
}

export default ReviewExercise;