import { useEffect } from "react";



function ReviewExercise(props){
    const exercise = props.item;
    const exerciseTypes = props.exerciseTypes;

    const getExerciseType = (exerciseId) => {
        // console.log('typeId:', session.exercise_type);
        for (let exerciseType of exerciseTypes){
            if(Number(exerciseType.id) == Number(exerciseId)){
                return `${exerciseType.exercise_name}`;
            }
        }
    }

    useEffect(()=>{

    }, [props])

    return(
        <>
            {exercise.set_id == 1 && <h3>Exercise: {getExerciseType(exercise.exercise_type)}</h3>}
            <h4>Set: {exercise.set_id}</h4>
            <h4>Reps: {exercise.reps}</h4>
            <h4>% of Max: {exercise.percent_of_max*100}%</h4>
        </>
    )
}

export default ReviewExercise;