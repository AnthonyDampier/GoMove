import {useEffect, useState} from 'react';

//import component
import ExerciseTypeOptions from "../ExerciseTypeOptions/ExerciseTypeOptions.jsx";
import CreateSetLoop from '../CreateSetLoop/CreateSetLoop.jsx';


function ExerciseForm(props){
    // information needed to insert into database

    const [exercise, setExercise] = useState(0);
    const [sets, setSets] = useState(0);
    const [createSets, setCreateSets] = useState(false);
    const [disableSetBtn, setDisableSetBtn] = useState(true);

    const updateExercise = (event) => {
        const exerciseType = event.target.value;
        // console.log('exerciseType: ', exerciseType);
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

    const handleSetClick = () => {
        setCreateSets(true);
    }

    useEffect(() => {
        if (sets > 0 && exercise > 0 && createSets === false){
            setDisableSetBtn(false);
        }
        if(createSets === true){
            setDisableSetBtn(true);
        }
    }, [sets, exercise, props])

    // useEffect(()=> {
    //     console.log('programId', props.programId,
    //     'sessionId:', props.sessionId, 
    //     'exerciseId: ', props.exerciseId,
    //     'sets: ', sets,
    //     'reps: ', reps,
    //     'percentOfMax: ', percentOfMax, '%',
    //     'SubmitProgram is: ', props.submitProgram,
    //     );
    //     if (props.submitProgram === true && reps !== 0 && sets !== 0){
    //             console.log('programId', props.programId,
    //                         'sessionId:', props.sessionId, 
    //                         'exerciseId: ', props.exerciseId,
    //                         'sets: ', sets,
    //                         'reps: ', reps,
    //                         'percentOfMax: ', percentOfMax, '%',
    //                         'SubmitProgram is: ', props.submitProgram,
    //                         );
    //             // TODO: Dispatch from here programID, sessionID, exerciseID, ExerciseType, Sets, Reps
    //     }
    // }, [props.submitProgram])


    // const [reps, setReps] = useState(0);
    // const updateReps = (event) => {
    //     // disallows user to input anything not at or between min and max
    //     const min = 0;
    //     const max = 5;
    //     const newReps = event.target.value;
    //     // console.log('reps: ', newReps);
    //     if (newReps > max) {
    //         setReps(max);
    //     } else if (newReps < min){
    //         setReps(min)
    //     } else {
    //         setReps(newReps);
    //     }
    // }
    //     const [percentOfMax, setPercentOfMax] = useState(100);

    // const updatePercentOfMax = (event) => {
    //     const min = 0;
    //     const max = 100;
    //     const newPercentOfMax = event.target.value;
    //     if (newPercentOfMax > max){
    //         setPercentOfMax(max);
    //     } else if (newPercentOfMax < min){
    //         setPercentOfMax(min);
    //     } else {
    //         setPercentOfMax(newPercentOfMax);
    //     }
    // }

    return(
        <div className="exercise-form">
            <div>
                <label>
                    Exercises:
                    <select 
                        onChange={(event) => updateExercise(event)}
                        value={exercise}
                        >
                        <ExerciseTypeOptions/>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Sets:
                
                    <input 
                    type='number'
                    value={sets}
                    onChange={(event) => updateSets(event)}/>
                </label>
                <button onClick={() => handleSetClick()} disabled={disableSetBtn}>Create Sets</button>
            </div>
            <hr/>
            <div>
                {createSets && <CreateSetLoop 
                    programId={props.programId}
                    sessionId={props.sessionId}
                    exerciseId={props.exerciseId}
                    exerciseType={exercise}
                    numOfSets={sets}
                    submitProgram={props.submitProgram}
                />}
            </div>
            {/*
            <div>
                <label>
                    Reps:
                </label>
                <input 
                    type='number'
                    value={reps}
                onChange={(event) => updateReps(event)}
                />
            </div>
            <div>
                <label>
                    Percent of Max:
                </label>
                <input 
                    type='number'
                    value={percentOfMax}
                onChange={(event) => updatePercentOfMax(event)}
                />
                <label>%</label>
            </div>/ */}
        </div>
    )
}

export default ExerciseForm;