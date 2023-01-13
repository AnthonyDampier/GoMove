import {useState, useEffect, useRef} from "react";
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

//imported components
import WorkoutTypeOptions from "../WorkoutGenreOptions/WorkoutGenresOptions";
import SessionsLoop from "../CreateSessionsLoop/CreateSessionsLoop.jsx"
import { useSelector } from "react-redux";

function CreateProgramForm(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [workoutGenre, setWorkoutType] = useState(0);
    const [numOfSessions, setNumOfSessions] = useState(0);
    const [description, setDescribe] = useState('');

    const program  = useSelector(store => store.createdWorkoutProgram);

    const [createSession, setCreateSession] = useState(false);
    const [disableSessionSubmit, setDisableSessionButton] = useState(true);
    const [disable, setDisable] = useState(false);

    // updates type of Workout based on users selection input
    const updateGenre = (event) => {
        const workoutGenre = event.target.value;
        // console.log('update type:', event.target.value);
        setWorkoutType(workoutGenre);
    }



    // session limits
    const min = 0;
    const max = 5;

    // updates session number based on users number input; disallows above max and below min
    const updateSessionNumber = (event) => {
        const sessions = event.target.value
        // console.log(sessions);
        if (sessions > max){
            setNumOfSessions(max);
        } else if (sessions < min){
            setNumOfSessions(min);
        } else {
            setNumOfSessions(sessions);
        }
    }

    const createProgram = () => {
        console.log(
            'Program Title: ', title, 
            'workoutGenre: ', workoutGenre,
            'Number of Sessions: ', numOfSessions,
            'desciption: ', description
            );
        dispatch({type: 'INSERT_PROGRAM', payload: {title: title, workoutGenre: workoutGenre, numOfSessions: numOfSessions, description: description}});

        dispatch({type: 'GET_CREATED_PROGRAM'});

        setCreateSession(true);
        setDisable(true);
    }

    const handleReviewProgram = () => {
        if(confirm('Any unsaved information will be lost in transition. Do you still want to proceed?')){
            console.log(program.id);
            let id = program.id;
            history.push({
                pathname: '/ReviewProgram/'+id,
            });
        }
        console.log(program.id);

    }

    useEffect (() => {
        if (numOfSessions > 0 && workoutGenre !== 0 && title != ''){
            setDisableSessionButton(false);
        }
        // console.log(program);
    }, [numOfSessions, workoutGenre])

    useEffect(()=>{
        dispatch({type: 'FETCH_EXERCISE_TYPES'});
        dispatch({type: 'FETCH_WORKOUT_GENRES'});
    }, [])

    useEffect(() => {
        dispatch({type: 'GET_CREATED_PROGRAM'});
    }, [createSession]);

    return(
        <div>
            <h2 id="create-title">
                Create a New Program
            </h2>
            <div>
                <div id="create-program">
                    <div id="create-program-header">
                        <div>
                        <label>
                            Title:
                        </label>
                        <input 
                            id="text"
                            type="text"
                            onChange={(event) => setTitle(event.target.value)}
                            // will disable after submit form
                            disabled={disable}
                            />
                        <label>
                            Workout Genre:
                        </label>
                        <select 
                            name="workoutType"
                            id='type' 
                            value={workoutGenre} 
                            onChange={(event) => updateGenre(event)}
                            // will disable after submit form
                            disabled={disable}
                            >
                            <WorkoutTypeOptions/>
                        </select>
                        <label>
                            Number of Sessions:
                        </label>
                        <input 
                            type="number" 
                            max={max} 
                            min={min} 
                            value={numOfSessions} 
                            onChange={(event)=> updateSessionNumber(event)}
                            // will disable after submit form
                            disabled={disable}
                        />
                        <div id="description">
                            <label>
                                Describe your program:
                            </label>
                            <input 
                                id="text"
                                type="text"
                                onChange={(event) => setDescribe(event.target.value)}
                                // will disable after submit form
                                disabled={disable}
                                />
                        </div>
                        </div>
                        
                        <button 
                            onClick={() => createProgram()}
                            // will disable after submit form
                            disabled={disableSessionSubmit}
                            >
                            ENTER
                        </button>
                    </div>
                    { createSession === true && <SessionsLoop numOfSessions={numOfSessions}/>}
                    { disable === true && 
                        <button 
                            id="view-program-btn"
                            onClick={() => handleReviewProgram()}
                            >
                            View Program
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default CreateProgramForm;