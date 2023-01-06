import { useHistory } from "react-router-dom";

import '../ListOfProgramsTable/ListOfPrograms.css'

function ListItemOfTen(props){
    const history = useHistory();
    
    const reviewProgram = (id) => {
        history.push({
            pathname: '/ReviewProgram/'+id,
        });
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
        </tr>
    )
}

export default ListItemOfTen;