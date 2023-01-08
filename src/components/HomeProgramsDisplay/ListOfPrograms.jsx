import axios from "axios";
import { useEffect, useState } from "react";

import ProgramRows from "../HomeProgramItem/ListTableProgramItem";

import './ListOfPrograms.css'

function ListOfPrograms(){
    // TODO: dispatch get 10 program

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        axios.get('/api/workoutProgram/TwentyPrograms').then((response) => {
            setPrograms(response.data)
        }).catch( error => {
            console.log('ERROR in 10 programs get: ',error);
        })
    }, []);


    return(
        <>
            <div id="container" className="top-programs">
                <div id="card-section">
                        {programs.map(program => {
                            return <ProgramRows program={program} key={program.id}/>
                        })}
                </div>
            </div>
        </>
    )
}

export default ListOfPrograms;