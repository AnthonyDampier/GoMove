import { useEffect, useState} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ExerciseLoop from "../ReviewExercise/ReviewExercise";
import ExerciseTypeOptions from "../ExerciseTypeOptions/ExerciseTypeOptions";

function ReviewExercises(props){
    const dispatch = useDispatch();

    const [exerciseTypeId, setExerciseTypeId] = useState(props.exerciseTypeId);
    const [exerciseName, setExerciseName] = useState(props.exerciseName);
    const editState= props.editState;
    const [renderCounter, updateRenderCounter]= useState(0);
    const exerciseTypes = useSelector(store => store.exerciseType);

    const changeExercise = (event) => {
        console.log('exercise Id: ', event.target.value);
        console.log('exercise name: ', exerciseTypes[Number(exerciseTypeId)].exercise_name);
        setExerciseTypeId(event.target.value);
        setExerciseName(exerciseTypes[Number(exerciseTypeId)].exercise_name);
        // setExerciseName(event.target.innerText);
    }

    useEffect(() => {
        // dispatch({type: 'UPDATE_EXERCISE', payload: {title: title, workoutGenre: workoutGenre, numOfSessions: numOfSessions}});
        if(!editState && renderCounter > 0){
            console.log('save');
            dispatch({
                type: 'UPDATE_EXERCISE_TYPE', 
                payload: {
                    programId: props.programId,
                    sessionId: props.sessionId,
                    exerciseId: props.exerciseId,
                    exerciseTypeId: Number(exerciseTypeId),
                }
            })
        } else {
            updateRenderCounter(renderCounter + 1);
        }
    }, [editState]);


    return(
        <div className="exercises" >  
            <h1>Exercise Id: {JSON.stringify(exerciseTypeId)}</h1>
            <h2>{!props.editState ? 
                exerciseName
                : 
                <select 
                    value={props.exerciseType} 
                    onChange={(event) => changeExercise(event)}
                    >
                        <ExerciseTypeOptions />
                </select>}
            </h2>
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