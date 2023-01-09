import { useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Admin.css';
import AdminUnapprovedRow from "../AdminUnapprovedProgram/AdminUnapprovedProgram";



function Admin(){
    const dispatch = useDispatch();

    const programs = useSelector(store => store.unapprovedPrograms);

    useEffect(() => {
        // TODO dispatch fetch all unapproved programs
        dispatch({type: 'FETCH_UNAPPROVED_PROGRAMS'});
    }, [programs]);

    return(
        <div id="admin-page">
            <h1>Admin Page!!</h1>
            {/* <h4>{JSON.stringify(programs)}</h4> */}
            {/* table map of unapproved programs */}
            <table className="styled-table">
                    <thead>
                    <tr>
                        <th className='table-title-col'>Title</th>
                        <th className='table-genre-col'>Genre</th>
                        <th className='table-author-col'>Trainer</th>
                        <th className='table-view-col'>View</th>
                        <th className='table-approval-col'>Approval</th>
                    </tr>
                    </thead>
                    <tbody>
                        {programs.map(program => {
                            return (
                                <AdminUnapprovedRow program={program} key={program.id}/>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}

export default Admin;