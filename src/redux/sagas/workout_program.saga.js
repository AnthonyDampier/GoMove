import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_WORKOUT_GENRES" actions
function* fetchWorkoutPrograms() {
    try {
        const response = yield axios.get('/api/workout_program/', action.payload );
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

function* workoutProgramSaga() {
    console.log('in program.saga');
    yield takeEvery('FETCH_PROGRAMS', fetchWorkoutPrograms);
    yield takeEvery('INSERT_PROGRAM', insertWorkoutProgram);
}

export default workoutProgramSaga;