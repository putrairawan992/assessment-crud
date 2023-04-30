import { all } from 'redux-saga/effects';
import UserSagas from './user.saga';

export default function* rootSaga() {
    yield all([
        UserSagas()
    ])
}