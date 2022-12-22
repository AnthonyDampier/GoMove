import {useState, useEffect, useRef} from "react";
import {useDispatch} from 'react-redux';

//imported components
import WorkoutTypeOptions from "../WorkoutGenreOptions/WorkoutGenresOptions";
import SessionsLoop from "../CreateSessionsLoop/CreateSessionsLoop.jsx"

function CreateProgramForm(){
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [workoutGenre, setWorkoutType] = useState(0);
    const [numOfSessions, setNumOfSessions] = useState(0);

    // TODO: props to session programId
    const [programId, setProgramId] = useState(-1);

    const [createSession, setCreateSession] = useState(false);
    const [disableSessionSubmit, setDisableSessionButton] = useState(true);
    const [disable, setDisable] = useState(false);

    const [submitProgram, setSubmitProgram] = useState(false);

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
            'Number of Sessions: ', numOfSessions);
        // TODO yield dispatch ({type: CreateProgram})
        dispatch({type: 'INSERT_PROGRAM', payload: {title: title, workoutGenre: workoutGenre, numOfSessions: numOfSessions}});

        // programId = getProgramId w/ title & author
        // console.log('create sessions');
        setCreateSession(true);
        setDisable(true);
    }

    const handleSubmitProgram = () => {
        // console.log('in CreateProgramForm submitProgram');
        setSubmitProgram(true);
    }
    useEffect (() => {
        if (numOfSessions > 0 && workoutGenre !== 0 && title != ''){
            setDisableSessionButton(false);
        }
    }, [numOfSessions, workoutGenre])

    useEffect(()=>{
        dispatch({type: 'FETCH_EXERCISE_TYPES'});
    }, [])


    return(
        <>
            <h2 id="title">
                Create a New Program
            </h2>
            <div>
                <div id="create-program">
                    <div>
                        <label>
                            Title
                        </label>
                        <input 
                            type="text"
                            onChange={(event) => setTitle(event.target.value)}
                            // will disable after submit form
                            disabled={disable}
                            />
                        <label>
                            Workout Type
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
                            Number of Sessions
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
                        <button 
                            onClick={() => createProgram()}
                            // will disable after submit form
                            disabled={disableSessionSubmit}
                            >
                            submit
                        </button>
                    </div>
                    { createSession === true && <SessionsLoop numOfSessions={numOfSessions} programId={programId} submitProgram={submitProgram}/>}
                    { createSession === true && <button onClick={() => handleSubmitProgram()}>Submit Program</button>}
                </div>
            </div>
        </>
    )
}

export default CreateProgramForm;