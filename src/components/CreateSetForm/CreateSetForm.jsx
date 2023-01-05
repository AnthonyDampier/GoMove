
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
    const [saved, setSaved] = useState(false);

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

    const saveSet = () => {
        console.log('saveSet');
        if (reps !== 0){
            if(saved === false){
                console.log('dispatch data');
                console.log('programId', program.id,
                'sessionId:', props.sessionId, 
                'exerciseId: ', props.exerciseId,
                'exerciseType:', props.exerciseType,
                'setId: ', props.setId,
                'reps: ', reps,
                'percentOfMax: ', percentOfMax, '%',
                );

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
                setSaved(true);
            } else {
                console.log('')
            }
        } else {
            alert('Enter reps for all exercises');
        }
    }

    useEffect(()=>{
        dispatch({type: 'GET_CREATED_PROGRAM'});
    }, [])

    return(
        <div className="set-form">
            <div  className={saved? "setSaved": ""}>
                <label className="set-num">Sets {props.setId}</label>
                <div>
                    <label>Reps: 
                    <input type='number' value={reps} onChange={(event) => updateReps(event)}/>
                    </label>
                </div>
                <div>
                    <label>% of Max: 
                        <input 
                            id="percent"
                            type='number' 
                            value={percentOfMax} 
                            onChange={(event) => updatePercentOfMax(event)}
                        />
                    </label>
                </div>
                <button onClick={() => saveSet()} disabled={saved}>SAVE</button>
            </div>
            <hr/>
        </div>
    )
}

export default createSetForm;