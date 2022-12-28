import { array } from "prop-types";
import { useEffect, useState } from "react";

function reviewSessions(props){

    const programInternal = props.programInternal;
    const exerciseTypes = props.exerciseTypes;
    const numOfSessions = props.numOfSessions;

    const getExerciseType = (session) => {
        console.log('typeId:', session.exercise_type);
        for (let exercise of exerciseTypes){
            if(exercise.id == session.exercise_type){
                console.log(exercise);
                return `${exercise.exercise_name}`;
            }
        }
    }

    let sessionNumber = 1;

    const nextSession = (session_id) => {
        if (sessionNumber != session_id){
            sessionNumber = session_id;
            return sessionNumber;
        }
        return sessionNumber;
    }

    const [arrayLengthOfSessions, setArray] = useState([]);

    const arrayOfSessionNumbers = (numOfSessions) => {
        let newArray= [];
        for(let i = 1; i <= numOfSessions; i++){
            newArray.push(i);
        }
        setArray(newArray);
        console.log('array session length:', arrayLengthOfSessions.length);
    }

    useEffect(() => {
        arrayOfSessionNumbers(numOfSessions);
    }, [])

    return(
        <>  
            <h1>{JSON.stringify(programInternal)}</h1>
            <h1>{JSON.stringify(numOfSessions)}</h1>
            {programInternal.map((item) => {
                return(
                <>
                    <h2>Session: {item.session_id}</h2>
                    {/* <h1>Session: {nextSession(item.session_id)}</h1> */}
                    {/* {console.log(sessionNumber!=item.session_id)} */}
                    <p>Exercise: {getExerciseType(item)}</p>
                    <p>Set: {item.set_id} Rep: {item.reps} PRx: {item.percent_of_max*100}%</p>
                </>
                )
            })}
            {arrayLengthOfSessions.map((item, index) => {
                // todo gets session exercises and produces exercises of session
                return (<p>{item}</p>)
            })}
        </>
    )
}

export default reviewSessions;