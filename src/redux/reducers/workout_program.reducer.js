const workoutProgramReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CREATED_PROGRAM':
            return action.payload;
        default:
            return state;
    }
};

  // user will be on the redux state at:
  // state.user
export default workoutProgramReducer;