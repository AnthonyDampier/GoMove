const exerciseTypeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EXERCISE_TYPES':
            return action.payload;
        default:
            return state;
        }
    };

  // user will be on the redux state at:
  // state.user
export default exerciseTypeReducer;