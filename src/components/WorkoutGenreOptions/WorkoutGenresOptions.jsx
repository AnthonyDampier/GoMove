import {useDispatch, useSelector} from 'react-redux'
// TODO: receive all workout types and generated option based on DB

function WorkoutTypeOptions(){


    const genres = useSelector((store) => store.workoutGenre)

    return(
        <>
            {genres.map((item) => {
                return(
                    <option key={item.id} value={item.id}>{item.genre}</option>
                )
            })}
        </>
    )
}

export default WorkoutTypeOptions;