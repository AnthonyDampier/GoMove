import axios from "axios";
import { useEffect, useState } from "react";

function ReviewSet(props){
    const [setInfo, setSetInfo] = useState({reps:0, percent_of_max:1.00})

    useEffect(() => {
        axios.get('/api/workoutProgram/setInfo/'+props.programId+'/'+props.sessionId+'/'+props.exerciseId+'/'+props.setId).then(response =>{ setSetInfo(response.data[0])}).catch(error => console.log(error));
        
    }, []);

    return(
        <div className="set" key={props.index}>
            <h3>Set {props.setId}</h3>
            {/* <h4>{JSON.stringify(setInfo)}</h4> */}
            <h4>Reps: {setInfo.reps}</h4>
            <h4>% of max: {setInfo.percent_of_max*100}%</h4>
        </div>
    )
}

export default ReviewSet;