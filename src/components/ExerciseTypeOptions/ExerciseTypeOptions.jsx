

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ExerciseTypeOptions(){
    const dispatch = useDispatch();

    const exercises = useSelector((store) => store.exerciseType);

    useEffect(() => {
        dispatch({type: 'FETCH_EXERCISE_TYPES'});
    }, [])

    return(
        <>
            {exercises.map(item => {
                return(
                    <option key={item.id} value={item.id}>{item.exercise_name}</option>
                )
            })
            }
        </>
    )
}

export default ExerciseTypeOptions;