import { useEffect, useState } from "react";
import Session from "../ReviewSession/ReviewSession";

function reviewSessions(props){

    const programInternal = props.programInternal;
    const exerciseTypes = props.exerciseTypes;
    const numOfSessions = props.numOfSessions;

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
        <div className=""> 
            {arrayLengthOfSessions.map((item, index) => {
                // todo gets session exercises and produces exercises of session
                return(<Session selectedSessionId={item} programInternal={programInternal} exerciseTypes={exerciseTypes} key={index}/>)
            })}
        </div>
    )
}

export default reviewSessions;