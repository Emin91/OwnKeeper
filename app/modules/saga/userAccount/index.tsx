import { put, takeEvery } from 'redux-saga/effects';
import { setUserAccount, updateUserAccount } from '../../redux/userAccounts/actions';

export function* workerUserAccount({payload}: any) {
    try {
        const { localSiteName, localLogin, localPassword, localNote, isEdit } = payload;
        const localId = isEdit ? payload.localId : +new Date();
        if((localSiteName && localLogin && localPassword).trim().length <= 0) {
            console.log('fields is empty---------');
        } else {
            console.log('fields is full---------');
            if(isEdit) {
                console.log('is edit menu')
                yield put(updateUserAccount({ localSiteName, localLogin, localPassword, localNote, localId }));

            } else {
                console.log('is not edit menu')
                yield put(setUserAccount({ localSiteName, localLogin, localPassword, localNote, localId }));
            };
        };
    } catch (error) {
        console.warn('workerUserAccount: ', error);
    };
};

export function* watchUserAccount() {
    yield takeEvery('SET_USER_ACCOUNT_SAGA', workerUserAccount);
};