import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_WORKOUT_GENRES" actions
function* fetchWorkoutPrograms() {
    try {
        const response = yield axios.get('/api/workoutProgram', action.payload );
        console.log(response.data);
        yield put({ type: 'SET_PROGRAMS', payload: response.data});

    } catch (error) {
        console.log('Program get request failed', error);
    }
}

function* insertWorkoutProgram(action) {
    try {
        yield axios.post('/api/workoutProgram/EnterProgram', action.payload);
    } catch {
        console.log('Program failed to be inserted in DB')
    }
}

function* fetchCreatedProgram(action){
    try{
        const response = yield axios.get('/api/workoutProgram/retrieveProgramID');
        // sets ID to be retrieved in store to continue creating sessions and exercises.
        yield put({type: 'SET_CREATED_PROGRAM', payload: response.data});
    } catch {
        console.log('Program failed to be inserted in DB');
    }
}

function* workoutProgramSaga() {
    console.log('in program.saga');
    yield takeEvery('FETCH_PROGRAMS', fetchWorkoutPrograms);
    yield takeEvery('INSERT_PROGRAM', insertWorkoutProgram);
    yield takeEvery('GET_CREATED_PROGRAM', fetchCreatedProgram);
}

export default workoutProgramSaga;