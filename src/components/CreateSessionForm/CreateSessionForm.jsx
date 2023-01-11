import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

//import components
import CreateExerciseLoop from '../CreateExerciseLoop/CreateExerciseLoop';

function CreateSessionForm(props){
    const [numOfExercises, setNumberOfExercise] = useState(0);
    const [confirmExerciseChange, setConfirmation] = useState(false);
    const [createExercises, setCreateExercises] = useState(false);
    const [submitSession, setSubmitSession] = useState(props.submitProgram);
    const programId = useSelector(store => store.createdWorkoutProgram)
    const [disableBtn, setDisableBtn] = useState(false)

    // session limits
    const min = 0;
    const max = 10;

    // updates session number based on users number input; disallows above max and below min
    const updateExerciseNumber = (event) => {
        const exercises = event.target.value
        // console.log(exercises);
        //limits user entry
        if (exercises > max){
            setNumberOfExercise(max);
        } else if (exercises < min){
            setNumberOfExercise(min);
        } else {
            setNumberOfExercise(exercises);
        }
    }

    const generateExercise = () => {
        // console.log('in generateExercise');
        if (confirmExerciseChange){
            if(confirm('Changing Your Exercise Number Will Erase All Progress In This Session')){
                createExercises(true);
            }
        } else {
            /* after the first submitting exercise the
            user will be notified if they try to change; 
            because they may lose their inputs 
            */
            console.log(
                'programId', programId.id,
                'sessionId:', props.sessionId, 
                'exerciseNumber: ', numOfExercises,
            )
            // TODO dispatch this payload 
            setCreateExercises(true);
            setConfirmation(true);
        }
    }

    // useEffect(() => {
    //     if (submitSession === true){
    //         console.log(
    //             'programId', programId,
    //             'sessionId:', props.sessionId, 
    //             'exerciseNumber: ', numOfExercises,
    //             'SubmitProgram is: ', props.submitProgram
    //         )
    //     }
    // }, [submitSession]);


    //props contains {sessionId: , programId: }
    return(
        <div className="session-form">
            <h2 id="session-title">Session: 
                <span>  {props.sessionId}</span>
            </h2>
            <div id="session-header">
                
                <label>Number of Exercise: 
                <input 
                    type='number'
                    min={min} 
                    max={max} 
                    value={numOfExercises}
                    onChange={(event)=> updateExerciseNumber(event)}
                    />
                </label>
                <button 
                    disabled={numOfExercises<=0}
                    onClick={() => generateExercise()}
                    >
                    Create Exercises
                </button>
                
            </div>
            
                <center>
                    {createExercises && <CreateExerciseLoop 
                        numOfExercises={numOfExercises} 
                        programId={programId.id}
                        sessionId={props.sessionId}
                        submitProgram={props.submitProgram}
                    />}
                </center>
            
        </div>
    )
}

export default CreateSessionForm;