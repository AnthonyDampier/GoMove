import { useEffect, useState } from "react";

import SetForm from '../CreateSetForm/CreateSetForm.jsx'

function createSetLoop(props){

    const [setArray, setSetArray] = useState([]);

    const createArrayOfSets = (props) => {
        let sets = [];

        for(let i = 1; i <= props.numOfSets; i++){
            sets.push({
                key: i, 
                setId: i
            })
        }
        setSetArray(sets);
    }

    useEffect(() => {
        createArrayOfSets(props);
    }, []);

    return(
        <>
        {/* loop for the number if sets in props */}
            {setArray.map(set =>{
                return(
                    <SetForm 
                        key={set.key}
                        programId={props.programId}
                        sessionId={props.sessionId}
                        exerciseId={props.exerciseId}
                        exerciseType={props.exerciseType}
                        setId={set.setId}
                        submitProgram={props.submitProgram}
                    />
                )
            })
            }
        </>
    )
}

export default createSetLoop;