import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_WORKOUT_GENRES" actions
function* fetchWorkoutPrograms(action) {
    try {
        console.log(action.payload.searchTerm);
        const response = yield axios.get('/api/workoutProgram/TwentyPrograms/'+action.payload.searchTerm);
        console.log('Fetched programs',response.data);
        yield put({ type: 'SET_PROGRAMS', payload: response.data});

    } catch (error) {
        console.log('Program get request failed', error);
    }
}

function* insertWorkoutProgram(action) {
    try {
        yield axios.post('/api/workoutProgram/EnterProgram', action.payload);
    } catch {
        console.log('Program failed to be inserted in saga')
    }
}

function* fetchCreatedProgram(action){
    try{
        const response = yield axios.get('/api/workoutProgram/retrieveProgramID');
        // sets ID to be retrieved in store to continue creating sessions and exercises.
        yield put({type: 'SET_CREATED_PROGRAM', payload: response.data});
    } catch {
        console.log('Program failed to be inserted in saga');
    }
}

function* insertProgramSetRow(action){
    try {
        yield axios.post('/api/workoutProgram/insertProgramSet', action.payload);
    } catch {
        console.log('Set insertion failed in saga');
    }
}

function* fetchWorkoutsByProgramId(action){
    try{
        const response = yield axios.get('/api/workoutProgram/fetchById/'+ action.payload.id);

        yield put({type: 'SET_WORKOUTS', payload: response.data})
    } catch {
        console.log('Failed fetch program by id in saga');
    }
}

function* fetchProgramInfoByProgramID(action){
    try{
        const response = yield axios.get('/api/workoutProgram/byId/'+ action.payload.id)
        yield put({type: 'SET_PROGRAM_INFO', payload: response.data[0]});
    } catch {
        console.log('Failed to get program by id');
    }
}

function* updateSet(action){
    try{
        yield axios.put('/api/workoutProgram/updateSet/'+action.payload.programId+'/'+action.payload.sessionId+'/'+action.payload.exerciseId+'/'+action.payload.setId, 
        {rep: action.payload.rep, percentOfMax: action.payload.percentOfMax})
    } catch {
        console.log('Failed to update set');
    }
}

function* updateExerciseType(action){
    try{
        yield axios.put('/api/workoutProgram/updateExerciseType/'+action.payload.programId+'/'+action.payload.sessionId+'/'+action.payload.exerciseId, 
        {exerciseTypeId: action.payload.exerciseTypeId})
    } catch {
        console.log('Error in updateExerciseType');
    }
}

function* deleteWorkoutProgram(action){
    try{
        yield axios.delete('/api/workoutProgram/deleteProgram/'+action.payload.programId);
    } catch {
        console.log('Error in deleteWorkoutProgram');
    }
}

function* fetchUnapprovedPrograms(action){
    try{
        const unapproved = yield axios.get('/api/workoutProgram/unapprovedPrograms');
        console.log(unapproved.data);
        yield put({type: 'SET_UNAPPROVED_PROGRAMS', payload: unapproved.data});
    } catch {
        console.log('ERROR in fetchUnapprovedPrograms Saga');
    }
}

function* approveProgram(action){
    try{
        yield axios.put('/api/workoutProgram/approveProgram/'+action.payload);
    } catch {
        console.log('ERROR in approvedProgram');
    }
}

function* workoutProgramSaga() {
    // console.log('in program.saga');
    yield takeEvery('FETCH_PROGRAMS', fetchWorkoutPrograms);
    yield takeEvery('FETCH_WORKOUTS_BY_ID', fetchWorkoutsByProgramId);
    yield takeEvery('INSERT_PROGRAM', insertWorkoutProgram);
    yield takeEvery('GET_CREATED_PROGRAM', fetchCreatedProgram);
    yield takeEvery('INSERT_EXERCISE', insertProgramSetRow);
    yield takeEvery('GET_PROGRAM_BY_ID', fetchProgramInfoByProgramID);
    yield takeEvery('UPDATE_SET', updateSet);
    yield takeEvery('UPDATE_EXERCISE_TYPE', updateExerciseType);
    yield takeEvery('DELETE_PROGRAM', deleteWorkoutProgram);
    yield takeEvery('FETCH_UNAPPROVED_PROGRAMS', fetchUnapprovedPrograms);
    yield takeEvery('APPROVE_PROGRAM', approveProgram);
}

export default workoutProgramSaga;