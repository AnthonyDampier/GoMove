const workoutGenre = (state = [], action) => {
    console.log('workout_genre.reducer', action.type, action.payload);
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