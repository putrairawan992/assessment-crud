import { AxiosResponse } from "axios";
import { CreateDataUserPayload, UserResponse, UserState, userTypes } from "../types/user.type";
import UserApi from "@/libraries/api/user";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { createDataUserFailure, getDataUserDetailFailure, getDataUserDetailSuccess, getDataUserFailure, getDataUserFetch, getDataUserSuccess, updateDataUserFailure } from "../slices/user.slice";
import { PayloadAction } from "@reduxjs/toolkit";
import MessageHandler from "@/libraries/message-handler";

function* getUser(): Generator<unknown, void, AxiosResponse<UserResponse> & UserState & any> {
    try {
        const response = yield call(UserApi().getUser);
        if (response.status === 200) {
            yield put(getDataUserSuccess(response.data));
        }
    } catch (error) {
        yield put(getDataUserFailure(error));
    }
}

function* createUser(
    params: PayloadAction<CreateDataUserPayload>
): Generator<unknown, void, AxiosResponse<UserResponse> & UserState & any> {
    try {
        const response = yield call(UserApi().createUser, params.payload)
        if (response.status === 200 || response.status === 201) {
            MessageHandler().success(`User has been added!.`);
            yield put(getDataUserFetch());
        }
    } catch (error) {
        yield put(createDataUserFailure(error));
    }
}

function* getUserDetail(
    params: PayloadAction<{id: number}>
): Generator<unknown, void, AxiosResponse<UserResponse> & UserState & any> {
    try {
        const response = yield call(UserApi().getUserDetail, params.payload)
        if (response.status === 200 || response.status === 201) {
            yield put(getDataUserDetailSuccess(response.data));
        }
    } catch (error) {
        yield put(getDataUserDetailFailure(error));
    }
}

function* updateUser(
    params: PayloadAction<CreateDataUserPayload>
): Generator<unknown, void, AxiosResponse<UserResponse> & UserState & any> {
    try {
        const response = yield call(UserApi().updateUser, params.payload)
        if (response.status === 200 || response.status === 201) {
            MessageHandler().success(`User has been updated!.`);
            yield put(getDataUserFetch());
        }
    } catch (error) {
        yield put(updateDataUserFailure(error));
    }
}

function* deleteUser(
    params: PayloadAction<{id: string}>
): Generator<unknown, void, AxiosResponse<UserResponse> & UserState & any> {
    try {
        const response = yield call(UserApi().deleteUser, params.payload)
        if (response.status === 200 || response.status === 201) {
            MessageHandler().success(`User has been deleted!.`);
            yield put(getDataUserFetch());
        }
    } catch (error) {
        yield put(updateDataUserFailure(error));
    }
}

function* watchUserRequest() {
    yield takeEvery(userTypes.GET_USER_FETCH, getUser);
    yield takeEvery(userTypes.CREATE_USER_FETCH, createUser);
    yield takeEvery(userTypes.GET_USER_DETAIL_FETCH, getUserDetail);
    yield takeEvery(userTypes.UPDATE_USER_FETCH, updateUser);
    yield takeEvery(userTypes.DELETE_USER_FETCH, deleteUser);
  }
  
  export default function* driverSaga() {
    yield all([fork(watchUserRequest)]);
  }