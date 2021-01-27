import { all, spawn } from 'redux-saga/effects'
import { watchUserAccount } from './userAccount';

export default function* rootSaga() {
    try {
        yield all([
            spawn(watchUserAccount),
        ]);
    } catch (error) {
        console.warn('rootSaga: ', error);
    }
}