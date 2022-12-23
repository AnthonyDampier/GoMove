import {useState, useEffect} from 'react';

// import components
import ExerciseForm from '../CreateExerciseForm/CreateExerciseForm';

function CreateExerciseLoop(props){
    const [exerciseArray, setExerciseArray] = useState([]);

    const createArrayOfExercise = (props) => {
        let exercises = []
        // console.log('in createArrayOfExercise');
        //loop based on props.numOfExercise
        for(let i = 1; i <= props.numOfExercises; i++){
            exercises.push({
                key: i,  
                exerciseId: i
            })
        }
        setExerciseArray(exercises);
    }

    useEffect(()=> {
        createArrayOfExercise(props);
    }, []);

    return(
        <>
            {/* loop for the number of exercise in props */}
            {exerciseArray.map(exercise => {
                return (
                    // <p>{exercise.key}</p>
                    <ExerciseForm 
                        key={exercise.key} 
                        programId={props.programId}
                        sessionId={props.sessionId} 
                        exerciseId={exercise.exerciseId}
                        submitProgram={props.submitProgram}
                    />
                )
            })}
        </>
    )
}

export default CreateExerciseLoop;