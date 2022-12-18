import { useEffect, useState } from 'react';

//import components
import CreateSessionForm from '../CreateSessionForm/CreateSessionForm';

function CreateSessionsForForm(props){

    // renders new state on change of sessionsArray
    const [sessionsArray, setSessionArray] = useState([]);

    // changes props.numOfSession into an array 
    const createArrayOfSessions = (props) =>{
        // create sessions array
        let sessions = []
        console.log('createArrayOfSessions');
        // loops based on props of numOfSessions
        for (let i = 1; i <= props.numOfSessions; i++){
            sessions.push({key: i, programId: props.programId, sessionId: i});
            console.log(i);
        }
        setSessionArray(sessions);
    }

    useEffect(() => {
        createArrayOfSessions(props);
    }, [])


    return(
            <>
                {/* loop for number of sessions in props */}
                {/* <p>Sessions: {JSON.stringify(sessionsArray)}</p> */}
                {sessionsArray.map(session => {
                        return(
                            <CreateSessionForm key={session.key} programId={session.programId} sessionId={session.key}/>
                        );
                    })}
            </>
    )
}

export default CreateSessionsForForm;