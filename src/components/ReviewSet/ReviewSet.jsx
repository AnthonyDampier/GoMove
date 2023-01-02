import axios from "axios";
import { useEffect, useState } from "react";

function ReviewSet(props){
    const reps = props.reps;
    const percentOfMax = props.percentOfMax;
    const editState = props.editState

    // const [exerciseType, setExerciseType] = useState(props.exerciseType);
    const [changedRep, setChangedRep] = useState(props.reps);
    const [changedPercentage, setChangedPercentage] = useState(props.percentOfMax);

    const repUpdate = (newReps) => {
        setChangedRep(newReps);
    }

    const percentageUpdate = (newPercent) => {
        console.log('percent change: ', newPercent);
        setChangedPercentage(newPercent)
    }

    useEffect(() => {
        console.log('Editing: ','exerciseId: ', props.exerciseId,'setId', props.setId, editState);
        console.log('reps: ', changedRep);
        console.log('percent:', changedPercentage);
        console.log('Was reps changed: ', changedRep !== reps);
        console.log('Was percent changed: ', changedPercentage !== percentOfMax);
        if (changedRep !== reps || changedPercentage !== percentOfMax){
            console.log('dispatch put request');
            console.log()
            // dispatch({type: 'UPDATE_EXERCISE', payload: {title: title, workoutGenre: workoutGenre, numOfSessions: numOfSessions}});
        }
    }, [editState]);


    return(
        <div className="set" key={props.index}>
            <h4>{JSON.stringify(props.exerciseType)}</h4>
            <h3>Set {props.setId}</h3>
            <h4>{JSON.stringify(editState)}</h4>
            <h4>Reps:  {!editState ? 
                <b>{reps}</b>  
                : 
                <input 
                    type='number' 
                    defaultValue={changedRep} 
                    onClick={(event) => repUpdate(event.target.value)}
                    />}
            </h4>
            <h4>% of max: {!editState ? <b>{percentOfMax*100}%</b>  : <input type='number' defaultValue={changedPercentage} onClick={(event) => percentageUpdate(event.target.value)}/>} </h4>
            {editState ? <label>Editing</label>: <label>Saved</label>}
        </div>
    )
}

export default ReviewSet;