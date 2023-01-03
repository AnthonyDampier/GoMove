import axios from "axios";
import { useEffect, useState } from "react";

import ProgramRows from "../ListItemOfTen/listItemOfTen";

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
                <h1>List of top 10 programs</h1>
                <table>
                    <thead>
                    <tr>
                        <th id='table-title'>Title</th>
                        <th id='table-genre'>Genre</th>
                        <th id='table-author'>Trainer</th>
                        <th id='table-view'>View</th>
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