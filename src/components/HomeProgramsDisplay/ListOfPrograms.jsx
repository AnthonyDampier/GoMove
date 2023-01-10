import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProgramRows from "../HomeProgramItem/ListTableProgramItem";

import './ListOfPrograms.css'

function ListOfPrograms(){
    // TODO: dispatch get 10 program
    const dispatch = useDispatch();

    const programs = useSelector(store => store.workoutPrograms);
    const [searchTerm, updateSearchTerm] = useState("");

    useEffect(() => {
        console.log(searchTerm);
        dispatch({type: "FETCH_PROGRAMS", payload: {searchTerm: searchTerm}});
    }, [searchTerm]);



    return(
        <>
            <div id="container" className="top-programs">
                <div className="search-input">
                    <label id="search-text">
                        Search:
                    </label> 
                    <input 
                        id="search-input"
                        type="text"
                        value={searchTerm}
                        onChange={(event) => updateSearchTerm(event.target.value)}
                        />
                    
                </div>
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