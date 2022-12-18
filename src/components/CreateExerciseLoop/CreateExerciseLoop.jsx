import {useState, useEffect} from 'react';

// import components
import ExerciseForm from '../ExerciseForm/ExerciseForm';

function CreateExerciseLoop(props){
    const [exerciseArray, setExerciseArray] = useState([]);

    const createArrayOfExercise = (props) => {
        let exercises = []
        console.log('in createArrayOfexercise');
        //loop based on props.numOfExercise
        for(let i = 0; i <= props.numOfExercises; i++){
            exercises.push({key: i, sessionId: props.sessionId, exerciseId: i})
        }
        setExerciseArray(exercises);
    }

    return(
        <>
            {/* loop for the number of exercise in props */}
            {exerciseArray.map(exercise => {
                return (
                    <ExerciseForm 
                        key={exerxise.key} 
                        sessionId={exercise.sessionId} 
                        exerciseId={exercise.exerciseId}
                    />
                )
            })}
        </>
    )
}

export default CreateExerciseLoop;