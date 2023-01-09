import { useHistory } from "react-router-dom";

import '../HomeProgramsDisplay/ListOfPrograms.css'

function ListItemOfTen(props){
    const history = useHistory();
    
    const reviewProgram = (id) => {
        history.push({
            pathname: '/ReviewProgram/'+id,
        });
    }

    const getImage = (databaseImage) => {
        if(!databaseImage){      
            return (require('../../images/BackgroundGoMove.jpg'));
        } else {
            return (require(databaseImage));
        }
    }
    // console.log(props.program);

    return(
        <div className="card" onClick={() => reviewProgram(props.program.id)}>
            <div id="img">
                <img className="cards-image" src={getImage(props.program.image)} alt="Program Image"/>
            </div>
            <div className="card-information">
                {/* <p>{JSON.stringify(props)}</p> */}
                <h4>{props.program.program_title}</h4>
                <h5>{props.program.genre}</h5>
                <p>{props.program.description}</p>
                <h6>By {props.program.author}</h6>
            </div>
        </div>
    )
}

export default ListItemOfTen;