
// key={set.key}
// programId={props.programId}
// sessionId={props.sessionId}
// exerciseId={exercise.exerciseId}
// setId={set.setId}
// submitProgram={props.submitProgram}

import { useState, useEffect } from "react";

function createSetForm(props){
    const [reps, setReps] = useState(0);
    const [percentOfMax, setPercentOfMax] = useState(100);

    const updateReps = (event) => {
        let updateReps = event.target.value;
        if(updateReps<0){
            setReps(0);
        } else {
            setReps(updateReps);
        }
    }

    const updatePercentOfMax = (event) => {
        let updatePercent = event.target.value;
        if(updatePercent > 100){
            setPercentOfMax(100);
        } else if (updatePercent < 0){
            setPercentOfMax(0);
        } else {
            setPercentOfMax(updatePercent);
        }
    }

    useEffect(()=> {
        console.log(
            'programId', props.programId,
            'sessionId:', props.sessionId, 
            'exerciseId: ', props.exerciseId,
            'sets: ', props.setId,
            'reps: ', reps,
            'percentOfMax: ', percentOfMax, '%',
            'SubmitProgram is: ', props.submitProgram,
        );
        if (props.submitProgram === true && reps !== 0){
                console.log('programId', props.programId,
                            'sessionId:', props.sessionId, 
                            'exerciseId: ', props.exerciseId,
                            'setId: ', props.setId,
                            'reps: ', reps,
                            'percentOfMax: ', percentOfMax, '%',
                            'SubmitProgram is: ', props.submitProgram,
                            );
                // TODO: Dispatch from here programID, sessionID, exerciseID, ExerciseType, Sets, Reps
                // !! remember to divide percentOfMax by 100.
        }
    }, [props.submitProgram])

    return(
        <div>
            <label>Sets {props.setId}</label>
            <div>
                <label>Reps</label>
                <input type='number' value={reps} onChange={(event) => updateReps(event)}/>
            </div>
            <div>
                <label>% of Max</label>
                <input type='number' value={percentOfMax} onChange={(event) => updatePercentOfMax(event)}/>
            </div>
        </div>
    )
}

export default createSetForm;