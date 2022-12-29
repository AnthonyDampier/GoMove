import { useEffect } from "react";
import ReviewExercises from "../ReviewExercises/ReviewExercises";

function ReviewSession(props){
    const programInternal = props.programInternal;
    const selectedSessionId = props.selectedSessionId;
    const exerciseTypes = props.exerciseTypes;
    let sessionArray = [];

    useEffect(() => {
        // programInternal = props.programInternal;
        // selectedSessionId = props.selectedSessionId;
    }, [props]);
    return (
        <>  
            <h1>Session: {selectedSessionId}</h1>
            {programInternal.map(item => {
                if (Number(item.session_id) == Number(selectedSessionId)){
                    sessionArray.push(item);
                    return;
                }
            })}
            <ReviewExercises programInternal={programInternal} exercises={sessionArray} exerciseTypes={exerciseTypes}/>
        </>
    )
}

export default ReviewSession;