import {useEffect, useState} from 'react';

//import component
import ExerciseTypeOptions from "../ExerciseTypeOptions/ExerciseTypeOptions.jsx";


function ExerciseForm(props){
    // information needed to insert into database
    const programId = props.programId;
    const sessionId = props.sessionId;
    const exerciseId = props.exerciseId;

    const [exercise, setExercise] = useState(0);
    const [reps, setReps] = useState(0);
    const [sets, setSets] = useState(0);

    const updateExercise = (event) => {
        const exerciseType = event.target.value;
        console.log('exerciseType: ', exerciseType);
        setExercise(exerciseType);
    }

    const updateSets = (event) => {
        // disallows user to input anything not at or between min and max
        const min = 0;
        const max = 5;
        const newSets = event.target.value;
        // console.log('sets input: ', newSets);
        if (newSets > max) {
            setSets(max);
        } else if (newSets < min){
            setSets(min)
        } else {
            setSets(newSets);
        }
    } 

    useEffect(()=> {
        if (props.submitProgram === true){
            console.log('Session:', props.sessionId, 'Exercise: ', props.exerciseId, 'SubmitProgram is: ', props.submitProgram);
            // TODO: Dispatch from here programID, sessionID, exerciseID, ExerciseType, Sets, Reps
        }
    }, [props.submitProgram])


    const updateReps = (event) => {
        // disallows user to input anything not at or between min and max
        const min = 0;
        const max = 5;
        const newReps = event.target.value;
        // console.log('reps: ', newReps);
        if (newReps > max) {
            setReps(max);
        } else if (newReps < min){
            setReps(min)
        } else {
            setReps(newReps);
        }
    }

    return(
        <div className="exercise-form">
            <div>
                <label>
                    Exercises:
                </label>
                <select 
                    onChange={(event) => updateExercise(event)}
                    value={exercise}>
                    <ExerciseTypeOptions/>
                </select>
            </div>
            <div>
                <label>
                    Sets:
                </label>
                <input 
                type='number'
                value={sets}
                onChange={(event) => updateSets(event)}/>
            </div>
            <div>
                <label>
                    Reps:
                </label>
                <input 
                    type='number'
                    value={reps}
                onChange={(event) => updateReps(event)}/>
            </div>
        </div>
    )
}

export default ExerciseForm;