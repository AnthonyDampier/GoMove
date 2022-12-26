
//import jsx
import YourTopPrograms from '../YourTopPrograms/YourTopPrograms';
import CreateProgramForm from "../CreateProgramForm/CreateProgramForm";

import './CreateProgram.css';

function CreateProgramPage(){




    return(
    <>
        <h1>Creation Page</h1>
        <div id="section" className="creation-page">
            <div className="create-new-program">
                <CreateProgramForm/>
            </div>
        </div>
    </>
    )
}

export default CreateProgramPage;