import axios from "axios";
import { useEffect, useState } from "react";

import ProgramRows from "../ListTableProgramItem/ListTableProgramItem";

import './ListOfPrograms.css'

function ListOfPrograms(){
    // TODO: dispatch get 10 program

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        axios.get('/api/workoutProgram/TenPrograms').then((response) => {
            setPrograms(response.data)
        }).catch( error => {
            console.log('ERROR in 10 programs get: ',error);
        })
    }, []);


    return(
        <>
            <div id="container" className="top-programs">
                <h1>List of 20 programs</h1>
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th className='table-title-col'>Title</th>
                        <th className='table-genre-col'>Genre</th>
                        <th className='table-author-col'>Trainer</th>
                        <th className='table-view-col'>View</th>
                    </tr>
                    </thead>
                    <tbody>
                        {programs.map(program => {
                            return <ProgramRows program={program} key={program.id}/>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListOfPrograms;