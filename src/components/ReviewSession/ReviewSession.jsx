import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Exercises from "../ReviewExercises/ReviewExercises";
import { useSelector } from "react-redux";

function ReviewSession(props){
    const id = useParams();
    const selectedSessionId = props.selectedSessionId;
    const exerciseTypes = props.exerciseTypes;
    const [exercises, setExercises] = useState([]);
    const [editState, setEdit] = useState(false);
    const userId = useSelector(store => store.user.id)

    const handleEdit = () => {
        setEdit(!editState);
    }

    useEffect(() => {
        axios.get('/api/workoutProgram/distinctExerciseIds/'+Number(id.id)+'/'+ selectedSessionId)
            .then(response =>{ setExercises(response.data)})
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="session">  
            <h1>Session: {selectedSessionId}</h1>
            {userId == props.programInfo.author_user_id && <button className="edit-btn" onClick={() => handleEdit()}>{editState ? 'save': 'edit'}</button>}
            {/* <h2>{JSON.stringify(props.programInfo)}</h2> */}
            {/* ÷\<h2>{JSON.stringify(userId)}</h2> */}
            {exercises.map((item, index) => {
                    return (
                        <Exercises 
                            programId={id.id} 
                            sessionId={selectedSessionId} 
                            exerciseId={item.exercise_id} 
                            exerciseName={item.exercise_name} 
                            exerciseTypeId={item.exercise_type_id}
                            key={index} 
                            editState={editState}
                            // rerender={() => rerender()}
                        />
                    )
            })}
        </div>
    )
}

export default ReviewSession;