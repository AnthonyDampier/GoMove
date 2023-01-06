const unapprovedProgramReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_UNAPPROVED_PROGRAMS':
            return action.payload;
        default:
            return state;
    }
};

  // user will be on the redux state at:
  // state.user
export default unapprovedProgramReducer;