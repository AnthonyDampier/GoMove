

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ExerciseTypeOptions(){

    const exercises = useSelector((store) => store.exerciseType);

    return(
        <>
            <option key={0}>Select An Exercise</option>
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