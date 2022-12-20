import {useState, useEffect, useRef} from "react";
import {useDispatch} from 'react-redux';

//imported components
import WorkoutTypeOptions from "../WorkoutTypeOptions/WorkoutTypeOptions";
import Sessions from "../CreateSessionsLoop/CreateSessionsLoop.jsx"

function CreateProgramForm(){
    const [title, setTitle] = useState('');
    const [workoutType, setWorkoutType] = useState(0);
    const [numOfSessions, setNumOfSessions] = useState(0);

    // TODO: props to session programId
    const [programId, setProgramId] = useState(0);

    const [createSession, setCreateSession] = useState(false);
    const [disable, setDisable] = useState(false);

    const [submitProgram, setSubmitProgram] = useState(false);

    // updates type of Workout based on users selection input
    const updateType = (event) => {
        const workoutType = event.target.value;
        // console.log('update type:', event.target.value);
        setWorkoutType(workoutType);
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

    // TODO: dispatch to create a program with title, author, workoutType. Return the ID of Program inserted. 
    const createProgram = () => {
        // console.log('create function')
        if (title != '' && workoutType !== 0 && numOfSessions !== 0){
            //TODO: yield dispatch ({type: CreateProgram})


            // programId = getProgramId w/ title & author
            // console.log('create sessions');
            setCreateSession(true);
        }
    }

    const handleSubmitProgram = () => {
        // console.log('in CreateProgramForm submitProgram');
        setSubmitProgram(true);
        // setSubmitProgram(false);
    }


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
                            value={workoutType} 
                            onChange={(event) => updateType(event)}
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
                            disabled={disable}
                            >
                            submit
                        </button>
                    </div>
                    { createSession === true && <Sessions numOfSessions={numOfSessions} programId={programId} submitProgram={submitProgram}/>}
                    { createSession === true && <button onClick={() => handleSubmitProgram()}>Submit Program</button>}
                </div>
            </div>
        </>
    )
}

export default CreateProgramForm;