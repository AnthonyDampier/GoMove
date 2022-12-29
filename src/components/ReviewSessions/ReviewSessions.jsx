import { useEffect, useState } from "react";
import Session from "../ReviewSession/ReviewSession";

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
    }, [props])

    return(
        <>  
            <h1>Number of Sessions: {JSON.stringify(numOfSessions)}</h1>

            {arrayLengthOfSessions.map((item) => {
                // todo gets session exercises and produces exercises of session
                return(<Session selectedSessionId={item} programInternal={programInternal} exerciseTypes={exerciseTypes}/>)
            })}
        </>
    )
}

export default reviewSessions;