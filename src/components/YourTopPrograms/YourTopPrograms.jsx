import { useSelector } from 'react-redux';

import './YourTopPrograms.css';

function YourTopPrograms(){
    const user = useSelector(store => store.user);
    return(
        <>  
            <div id="top-programs title">
                <h2 >
                    Your Top Program
                </h2>
                <h4>
                    by {user.username}
                </h4>
            </div>
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