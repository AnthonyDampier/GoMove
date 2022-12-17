//import jsx
import YourTopPrograms from '../YourTopPrograms/YourTopPrograms';

import './CreateProgram.css';

function CreateProgram(){
    return(
    <>
        <h1>Creation Page</h1>
        <div id="section" className="creation-page">
            <div className="create-new-program">
                <h2 id="title">
                    Create a New Program
                </h2>
                <div>
                    <form>
                        <div>
                            <label>Title</label>
                            <input type="text"/>
                            <label>Genre</label>
                            <select />
                            <label>Number of Sessions</label>
                            <input type="number"/>
                            <input type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
            <div id="container" className="your-program-performance">
                <YourTopPrograms/>
            </div>
        </div>
    </>
    )
}

export default CreateProgram;