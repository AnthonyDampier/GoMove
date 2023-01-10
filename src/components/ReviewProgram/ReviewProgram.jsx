import { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import '../ReviewProgram/ReviewProgram.css'
import SessionsLoop from "../ReviewSessions/ReviewSessions"


function ReviewProgram(){   
    const dispatch = useDispatch();
    const history = useHistory();

    const id = useParams();
    // console.log('id',id);
    const programInfo = useSelector(store => store.workoutPrograms[0]);
    // console.log('program info', programInfo);
    const programInternal = useSelector(store => store.workoutsReducer);
    // console.log('program internal sessions', programInternal)
    const exerciseTypes = useSelector(store => store.exerciseType);
    const workoutGenre = useSelector(store => store.workoutGenre);

    const userId = useSelector(store => store.user.id);
    const userAuthority = useSelector(store => store.user.access_level);

    const [update, setUpdate] = useState(true);


    useEffect(() => {
        //TODO : Fetch all programs information and session by programID
            dispatch({type: 'FETCH_WORKOUTS_BY_ID', payload: id});
            dispatch({type: 'GET_PROGRAM_BY_ID', payload: id});
            dispatch({type: 'FETCH_EXERCISE_TYPES'});
            dispatch({type: 'FETCH_WORKOUT_GENRES'});
    }, [update])

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

    const handleDelete = (id) => {
        console.log('Request for delete program id: ', id);
        if (confirm('Do you want to delete this program?')){
            console.log('Deleted program: ', id);
            dispatchDeletePost(id);
            history.push('/');
        } else {
            console.log('Delete Canceled');
        }
    }

    const dispatchDeletePost = () => {
        dispatch({
            type: 'DELETE_PROGRAM',
            payload: {programId: id.id}
        })
    }

    const handleApproval = (id) => {
        //TODO : create dispatch to approve programs in server
        dispatch({type: 'APPROVE_PROGRAM', payload: id})
        setUpdate(!update);
    }


    return(
        <div id="empty-space-program-review-page">
            <div id="program-review-page">  
                <h1>Program Title: {programInfo.program_title}</h1>
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
                <div id='button-div'>
                    {userId == programInfo.author_user_id && 
                        <button 
                            onClick={() => handleDelete(id.id)}>
                            DELETE
                        </button>
                    }
                    {
                        userAuthority > 0 && programInfo.approved === false ? 
                        <button 
                            id="approval-btn"
                            onClick={() => handleApproval(id.id)}>
                            Approve
                        </button>
                        : 
                        <></>
                    }
                </div>
                <SessionsLoop
                    numOfSessions={programInfo.num_of_sessions} 
                    exerciseTypes={exerciseTypes} 
                    programInternal={programInternal}
                    programInfo={programInfo}
                />
            </div>
        </div>
    )
}

export default ReviewProgram;