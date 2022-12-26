
// key={set.key}
// programId={props.programId}
// sessionId={props.sessionId}
// exerciseId={exercise.exerciseId}
// setId={set.setId}
// submitProgram={props.submitProgram}

import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function createSetForm(props){
    const dispatch = useDispatch();

    const [reps, setReps] = useState(0);
    const [percentOfMax, setPercentOfMax] = useState(100);
    const program = useSelector(store => store.createdWorkoutProgram)

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
        if (props.submitProgram === true && reps !== 0){
                console.log('programId', program.id,
                            'sessionId:', props.sessionId, 
                            'exerciseId: ', props.exerciseId,
                            'exerciseType:', props.exerciseType,
                            'setId: ', props.setId,
                            'reps: ', reps,
                            'percentOfMax: ', percentOfMax, '%',
                            'SubmitProgram is: ', props.submitProgram,
                            );
                // TODO: Dispatch from here programID, sessionID, exerciseID, ExerciseType, Sets, Reps
                // !! remember to divide percentOfMax by 100.

                dispatch({
                    type: 'INSERT_EXERCISE', 
                    payload: {
                        programId: program.id,
                        sessionId: props.sessionId,
                        exerciseId: props.exerciseId,
                        exerciseType: props.exerciseType,
                        setId: props.setId,
                        reps: reps,
                        percentageOfMax: percentOfMax/100,
                    }
                })

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