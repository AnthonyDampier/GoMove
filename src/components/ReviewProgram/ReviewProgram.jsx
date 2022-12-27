import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function ReviewProgram(){   
    const dispatch = useDispatch();

    const id = useParams();
    console.log('id',id);
    const programInternal = useSelector(store => store.workoutsReducer);


    useEffect(() => {
        //TODO : Fetch all programs information and session by programID
        dispatch({type: 'FETCH_WORKOUTS_BY_ID', payload: id});
    }, [])

    return(
        <>  
        <h1>Program Review</h1>
            <h1>program Id: {JSON.stringify(id)}</h1>
            <h2>program: {JSON.stringify(programInternal)}</h2>
        </>
    )
}

export default ReviewProgram;