import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_WORKOUT_GENRES" actions
function* fetchWorkoutGenre() {
    try {
    console.log('in workout_genre.saga.js in fetchWorkoutGenre()');

    const response = yield axios.get('/api/workoutGenre');

    yield put({ type: 'SET_WORKOUT_GENRES', payload: response.data});

    } catch (error) {
        console.log('Genre get request failed', error);
    }
}

function* userSaga() {
    console.log('in workout_genre.saga');
    yield takeEvery('FETCH_WORKOUT_GENRES', fetchWorkoutGenre);
}

export default userSaga;