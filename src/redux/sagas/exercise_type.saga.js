import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_EXERCISE_TYPE" actions
function* fetchExerciseType() {
    try {
    const response = yield axios.get('/api/exerciseType');

    console.log(response.data);
    yield put({ type: 'SET_EXERCISE_TYPES', payload: response.data});

    } catch (error) {
        console.log('Exercise get request failed', error);
    }
}

function* exerciseTypeSaga() {
    console.log('in exercise_type.saga.js');
    yield takeEvery('FETCH_EXERCISE_TYPES', fetchExerciseType);
}

export default exerciseTypeSaga;