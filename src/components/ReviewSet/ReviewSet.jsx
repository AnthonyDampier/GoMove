import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function ReviewSet(props){
    const dispatch = useDispatch();
    const editState = props.editState
    const [renderCounter, updateRenderCounter] = useState(0);

    // const [exerciseType, setExerciseType] = useState(props.exerciseType);
    const [reps, setReps] = useState(props.reps);
    const [percentage, setPercentage] = useState(props.percentOfMax);
    // console.log(percentage);

    const repUpdate = (newReps) => {
        console.log(newReps);
        setReps(newReps);
    }

    const percentageUpdate = (newPercent) => {
        console.log('percent change: ', newPercent);
        if(newPercent > 1){
            setPercentage(1);
        } else if(newPercent <0){
            setPercentage(0);
        } else {
            setPercentage(newPercent)
        }
    }

    useEffect(() => {
        console.log('Editing: ','exerciseId: ', props.exerciseId,'setId', props.setId, editState);
        console.log('reps: ', reps);
        console.log('percent:', percentage);
        console.log('Was reps changed: ', reps !== reps);
        console.log('Was percent changed: ', percentage !== percentage);
        console.log('dispatch put request');
        // dispatch({type: 'UPDATE_EXERCISE', payload: {title: title, workoutGenre: workoutGenre, numOfSessions: numOfSessions}});
        if(!editState && renderCounter > 0){
            console.log('save?');
            dispatch({
                type: 'UPDATE_SET', 
                payload: {
                    programId: props.programId,
                    sessionId: props.sessionId,
                    exerciseId: props.exerciseId,
                    // exerciseTypeId: props.exerciseTypeId,
                    setId: props.setId,
                    rep: reps,
                    percentOfMax: Number(percentage)
                }
            })
        } else {
            updateRenderCounter(renderCounter + 1);
        }
    }, [editState]);


    return(
        <div className="set" key={props.index}>
            {/* <h4>{JSON.stringify(props)}</h4> */}
            <h3>Set {props.setId}</h3>
            <h4>{JSON.stringify(editState)}</h4>
            <h4>Reps:  {!editState ? 
                <b>{reps}</b>  
                : 
                <input 
                    type='number' 
                    defaultValue={reps} 
                    onChange={(event) => repUpdate(event.target.value)}
                    />}
            </h4>
            <h4>% of max: {!editState ? 
                <b>{percentage*100}%</b>  
                : 
                <input 
                    type='number' 
                    // defaultValue={percentage} 
                    value={percentage}
                    max={1}
                    min={0}
                    step="0.01"
                    onChange={(event) => percentageUpdate(event.target.value)}
                />} 
            </h4>
            {editState ? <label>Editing</label>: <label>Saved</label>}
        </div>
    )
}

export default ReviewSet;