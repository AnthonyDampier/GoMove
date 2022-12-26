import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//import components
import CreateSessionForm from '../CreateSessionForm/CreateSessionForm';

function CreateSessionsLoop(props){

    // renders new state on change of sessionsArray
    const [sessionsArray, setSessionArray] = useState([]);

    // changes props.numOfSession into an array 
    const createArrayOfSessions = (props) =>{
        // create sessions array
        let sessions = []
        // console.log('createArrayOfSessions');
        // loops based on props of numOfSessions
        for (let i = 1; i <= props.numOfSessions; i++){
            sessions.push({key: i, sessionId: i});
            // console.log(i);
        }
        setSessionArray(sessions);
    }

    useEffect(() => {
        createArrayOfSessions(props);
        // if (props.submitProgram === true){
        //     console.log('in CreateSessionLoop submitProgram is: ', props.submitProgram);        
        // }
    }, [props.submitProgram]);


    return(
            <>
                {/* loop for number of sessions in props */}
                {/* <p>Sessions: {JSON.stringify(sessionsArray)}</p> */}
                {sessionsArray.map(session => {
                        return(
                            <CreateSessionForm 
                                key={session.key} 
                                sessionId={session.key}
                                submitProgram={props.submitProgram}
                            />
                        );
                    })}
            </>
    )
}

export default CreateSessionsLoop;