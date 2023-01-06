import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function AdminUnapprovedTable(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    const reviewProgram = (id) => {
        history.push({
            pathname: '/ReviewProgram/'+id,
        });
    }

    const approveProgram = (id) => {
        //TODO : create dispatch to approve programs in server
        dispatch({type: 'APPROVE_PROGRAM', payload: id})
        dispatch({type: 'FETCH_UNAPPROVED_PROGRAMS'});
    }

    return(
        <tr key={props.program.id}>
            {/* program title */}
            <td className="table-title-col">
                {props.program.program_title}
            </td>
            {/* Program Author */}
            <td className='table-genre-col'>
                {props.program.genre}
            </td>
            {/* program Genre */}
            <td className='table-author-col'>
                {props.program.author}
            </td>
            <td className='table-view-col'>
                <button 
                    onClick={() => reviewProgram(props.program.id)}
                    id='table-btn'
                    >
                        View
                </button>
            </td>
            <td className='table-approval-col'>
                <button 
                    onClick={() => approveProgram(props.program.id)}
                    id='table-btn'
                    >
                        Approve
                </button>
            </td>
        </tr>
    )
}

export default AdminUnapprovedTable;