const createWorkoutProgramReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CREATED_PROGRAM':
            return action.payload[0];
        default:
            return state;
    }
};

export default createWorkoutProgramReducer;