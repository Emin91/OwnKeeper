import { all, spawn } from 'redux-saga/effects'

export default function* rootSaga() {
    try {
        yield all([
        ]);
    } catch (error) {
        console.warn('rootSaga: ', error);
    }
}