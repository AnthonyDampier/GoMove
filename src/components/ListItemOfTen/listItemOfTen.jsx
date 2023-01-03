import { useHistory } from "react-router-dom";

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
                <td>
                    {props.program.program_title}
                </td>
                {/* Program Author */}
                <td>
                    {props.program.author}
                </td>
                {/* program Genre */}
                <td>
                    {props.program.genre}
                </td>
                <td>
                    <button onClick={() => reviewProgram(props.program.id)}>View</button>
                </td>
        </tr>
    )
}

export default ListItemOfTen;