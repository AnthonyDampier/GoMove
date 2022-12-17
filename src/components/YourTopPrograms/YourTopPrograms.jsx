import './YourTopPrograms.css';

function YourTopPrograms(){
    return(
        <>
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
        </>
    )
}

export default YourTopPrograms;