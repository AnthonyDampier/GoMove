
//import jsx
import YourTopPrograms from '../YourTopPrograms/YourTopPrograms';
import CreateProgramForm from "../CreateProgramForm/CreateProgramForm";

import './CreateProgram.css';

function CreateProgramPage(){




    return(
    <center id="creation-page-padding">
        <div className="create-new-program">
            <CreateProgramForm/>
        </div>
    </center>
    )
}

export default CreateProgramPage;