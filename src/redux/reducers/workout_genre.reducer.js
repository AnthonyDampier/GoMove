const workoutGenre = (state = [], action) => {
    switch (action.type) {
        case 'SET_WORKOUT_GENRES':
            return action.payload;
        default:
            return state;
        }
    };

  // user will be on the redux state at:
  // state.user
export default workoutGenre;