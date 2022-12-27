import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CreateSessionsLoop from "../CreateSessionsLoop/CreateSessionsLoop";

function ReviewProgram(){   
    const dispatch = useDispatch();

    const id = useParams();
    console.log('id',id);
    const programInfo = useSelector(store => store.createdWorkoutProgram);
    console.log('program info', programInfo);
    const programInternal = useSelector(store => store.workoutsReducer);
    console.log('program internal sessions', programInternal)
    const exerciseTypes = useSelector(store => store.exerciseType);


    useEffect(() => {
        //TODO : Fetch all programs information and session by programID
        dispatch({type: 'GET_CREATED_PROGRAM'});
        dispatch({type: 'FETCH_WORKOUTS_BY_ID', payload: id});
        dispatch({type: 'FETCH_EXERCISE_TYPES'});
    }, [programInfo, programInternal, exerciseTypes])

    const getExerciseType = (typeId) => {
        for (let exercise of exerciseTypes){
            if(exercise.id === typeId){
                console.log(exercise);
                return exercise.exercise_name;
            }
        }
    }


    return(
        <>  
            <h1>Program Review</h1>
            <h1>program Id: {JSON.stringify(id)}</h1>
            <h2>Program:</h2>
            <p>{JSON.stringify(programInternal)}</p>
            <h2>Exercise Types</h2>
            <p>{JSON.stringify(exerciseTypes)}</p>
            <div>
                <h2>Session : session_id</h2>
                <h3>Exercise: exerciseType</h3>
                <h4>Set: set_id</h4>
                <h5>Reps: reps</h5>
            </div>
            <section>
                {programInternal.map(session => {
                    return (
                        <div>
                            <h1>{JSON.stringify(session)}</h1>
                            <h2>session {JSON.stringify(session.session_id)}</h2>
                            <h3>{JSON.stringify(getExerciseType(session.exerciseType))}</h3>
                        </div>
                    )
                })}
            </section>
            <h1>Program sessions</h1>
        </>
    )
}

export default ReviewProgram;