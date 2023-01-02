import axios from "axios";
import { useEffect, useState } from "react";

function ReviewSet(props){
    const reps =props.reps;
    const percentOfMax= props.percentOfMax;

    useEffect(() => {
        
    }, []);

    return(
        <div className="set" key={props.index}>
            <h3>Set {props.setId}</h3>
            {/* <h4>{JSON.stringify(setInfo)}</h4> */}
            <h4>Reps: {reps}</h4>
            <h4>% of max: {percentOfMax*100}%</h4>
        </div>
    )
}

export default ReviewSet;