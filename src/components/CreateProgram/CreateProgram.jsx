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
            <div className="your-program-performance">
                <h2 id="title">
                    Your Program Performance
                </h2>
                <table>
                    <thead>
                        <tr>
                            <th id='table-title'>Title</th>
                            <th id='table-users'>Users</th>
                            <th id='table-edit'>Edit?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Program Title</td>
                            <td>2839</td>
                            <td>✍🏾</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

export default CreateProgram;