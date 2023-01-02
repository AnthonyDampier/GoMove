import { useHistory } from "react-router-dom";

function ListItemOfTen(props){
    const history = useHistory();
    const reviewProgram = (id) => {
        history.push({
            pathname: '/ReviewProgram/'+id,
        });
    }

    return(
        <li onClick={() => reviewProgram(props.program.id)} key={props.program.id}>
                {/* program title */}<b>{props.program.program_title}</b>
                {/* Program Author */} - {props.program.author}
                {/* program Genre */} - {props.program.genre}
        </li>
    )
}

export default ListItemOfTen;