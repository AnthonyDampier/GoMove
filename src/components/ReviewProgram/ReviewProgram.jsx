import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewProgram(){


    const id = useParams();
    console.log('id',id);
    program

    useEffect(() => {
        //TODO : Fetch all programs information and session by programID
        dispatchEvent({type: 'FETCH_BY_ID'});
    }, [])

    return(
        <>  
        <h1>Program Review</h1>
            <h1>program Id: {JSON.stringify(id)}</h1>
        </>
    )
}

export default ReviewProgram;