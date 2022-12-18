import {useState} from 'react';

//import components
import CreateExerciseLoop from '../CreateExerciseLoop/CreateExerciseLoop';

function CreateSessionForm(props){
    const [numOfExercises, setNumberOfExercise] = useState(0);
    const [confirmExerciseChange, setConfirm] = useState(false);
    const [createExercises, setCreateExercises] = useState(false);

    // session limits
    const min = 0;
    const max = 4;

    // updates session number based on users number input; disallows above max and below min
    const updateExerciseNumber = (event) => {
        const exercises = event.target.value
        console.log(exercises);
        if (exercises > max){
            setNumberOfExercise(max);
        } else if (exercises < min){
            setNumberOfExercise(min);
        } else {
            setNumberOfExercise(exercises);
        }
    }

    const generateExercise = () => {
        console.log('in generateExercise');
        if (confirmExerciseChange){
            if(confirm('Changing Your Exercise Number Will Erase All Progress In This Session')){
                createExercises(true);
            }
        } else {
            /* after the first submittion of exercise the
            user will be notified if they try to change; 
            because they may lose their inputs 
            */
            setCreateExercises(true);
            confirmExerciseChange(true);
        }
    }
    //props contains {sessionId: , programId: }
    return(
        <>
            <h4>Session: {props.sessionId}</h4>
            <label>Number of Exercise</label>
            <input 
                type='number'
                min={min} 
                max={6} 
                value={numOfExercise}
                onChange={(event)=> updateExerciseNumber(event)}/>
            <button onClick={() => generateExercise()}>Create Exercises</button>
            <div>
                {createExercises && <CreateExerciseLoop numOfExercises={numOfExercises}/>}
            </div>
        </>
    )
}

export default CreateSessionForm;