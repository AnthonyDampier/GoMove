import { useEffect } from "react";
import Exercise from "../ReviewExercise/ReviewExercise";

function ReviewExercises(props){

    useEffect(()=>{

    }, [props])

    return(
        <>  
            {props.exercises.map(item => {
                return (<>
                            {/* <h1>{JSON.stringify(item)}</h1> */}
                            <Exercise item={item} exerciseTypes={props.exerciseTypes}/>
                        </>    
                    )
            })}
        </>
    )
}

export default ReviewExercises;