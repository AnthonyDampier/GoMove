import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { batch, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import '../ReviewProgram/ReviewProgram.css'
import SessionsLoop from "../ReviewSessions/ReviewSessions"


function ReviewProgram(){   
    const dispatch = useDispatch();

    const id = useParams();
    // console.log('id',id);
    const programInfo = useSelector(store => store.workoutPrograms);
    // console.log('program info', programInfo);
    const programInternal = useSelector(store => store.workoutsReducer);
    // console.log('program internal sessions', programInternal)
    const exerciseTypes = useSelector(store => store.exerciseType);
    const workoutGenre = useSelector(store => store.workoutGenre);


    useEffect(() => {
        //TODO : Fetch all programs information and session by programID
            dispatch({type: 'FETCH_WORKOUTS_BY_ID', payload: id});
            dispatch({type: 'GET_PROGRAM_BY_ID', payload: id});
            dispatch({type: 'FETCH_EXERCISE_TYPES'});
            dispatch({type: 'FETCH_WORKOUT_GENRES'});
    }, [])

    const getExerciseType = (session) => {
        // console.log('typeId:', session.exercise_type);
        for (let exercise of exerciseTypes){
            if(exercise.id == session.exercise_type){
                // console.log(exercise);
                return `${exercise.exercise_name}`;
            }
        }
    }

    const getGenre = (genreId) => {
        for (let genre of workoutGenre){
            if (genreId == genre.id){
                return `${genre.genre}`;
            }
        }
    }


    return(
        <>  
            <h1>Program Review</h1>
            <h2>Program Title: {programInfo.program_title}</h2>
            {/* <p>{id.id}</p> */}
            <h3>Workout Type: {getGenre(programInfo.program_genre)}</h3>
            {/* <p>{JSON.stringify(programInfo)}</p> */}
            {/* <h4>Program Internals:</h4> */}
            {/* <p>{JSON.stringify(programInternal)}</p> */}
            {/* <h4>Exercise Types</h4> */}
            {/* <p>{JSON.stringify(exerciseTypes)}</p> */}
            {/* <div>
                <h2>Session : session_id</h2>
                <h3>Exercise: exerciseType</h3>
                <p>Set: set_id Reps: reps</p>
            </div> */}

            <SessionsLoop
                numOfSessions={programInfo.num_of_sessions} 
                exerciseTypes={exerciseTypes} 
                programInternal={programInternal}
            />

            <h1>Program sessions</h1>
        </>
    )
}

export default ReviewProgram;