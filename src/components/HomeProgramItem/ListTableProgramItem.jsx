import { useHistory } from "react-router-dom";

import '../HomeProgramsDisplay/ListOfPrograms.css'

function ListItemOfTen(props){
    const history = useHistory();
    
    const reviewProgram = (id) => {
        history.push({
            pathname: '/ReviewProgram/'+id,
        });
    }

    // let lastPhotoNum = -1;
    const getImage = (id, Image) => {
        // const randomNum = Math.floor(Math.random() * 5); 
        // while (randomNum === lastPhotoNum){
        //     randomNum = Math.floor(Math.floor()*5);
        // }
        // lastPhotoNum = randomNum;

        if(!Image){      
            switch(id%5){
                case 0:
                    return require('../../images/BuildMuscle.jpg');
                case 1:
                    return require('../../images/female_build_muscle.webp');
                case 2:
                    return require('../../images/female_lean.jpg');
                case 3:
                    return require('../../images/female_lean2.jpg');
                case 4:
                    return require('../../images/male_build_muscle.jpg');
            }
        } else {
            return (require(Image));
        }
    }
    // console.log(props.program);

    return(
        <div className="card" onClick={() => reviewProgram(props.program.id)}>
            <div id="img">
                <img className="cards-image" src={getImage(props.program.id, props.program.image)} alt="Program Image"/>
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