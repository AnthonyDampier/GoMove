import axios from "axios";
import { useEffect, useState } from "react";

import ListItemOfTen from "../ListItemOfTen/listItemOfTen";

function ListOfTenPrograms(){
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
                <h2>List of top 10 programs</h2>
                <ul>
                    {programs.map(program => {
                        return <ListItemOfTen program={program} key={program.id}/>
                    })}
                </ul>
            </div>
        </>
    )
}

export default ListOfTenPrograms;