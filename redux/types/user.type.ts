export interface DataUser {
    gender: string
    id: number
    file: string
    born_date: string
    user_id: number
    address: string
    name: string
    photo: string
    created_at: string
    user_name: string
}

export interface UserResponse {
    message: string
    data: DataUser[]
}

export interface CreateDataUserPayload {
    id?: number;
    gender?: string
    born_date?: string
    address?: string
    name?: string
}

export interface UserState {
    isLoading: boolean;
    data: DataUser[];
    createNewUser: CreateDataUserPayload;
    userDetail: DataUser;
}

export const userTypes = {
    GET_USER: 'user/getDataUser',
    GET_USER_FETCH: 'user/getDataUserFetch',
    GET_USER_SUCCESS: 'user/getDataUserSuccess',
    GET_USER_FAILURE: 'user/getDataUserFailure',

    CREATE_USER: 'user/getDataUser',
    CREATE_USER_FETCH: 'user/createDataUserFetch',
    CREATE_USER_SUCCESS: 'user/createDataUserSuccess',
    CREATE_USER_FAILURE: 'user/createDataUserFailure',

    GET_USER_DETAIL: 'user/getDataUserDetail',
    GET_USER_DETAIL_FETCH: 'user/getDataUserDetailFetch',
    GET_USER_DETAIL_SUCCESS: 'user/getDataUserDetailSuccess',
    GET_USER_DETAIL_FAILURE: 'user/getDataUserDetailFailure',

    UPDATE_USER: 'user/getDataUser',
    UPDATE_USER_FETCH: 'user/updateDataUserFetch',
    UPDATE_USER_SUCCESS: 'user/updateDataUserSuccess',
    UPDATE_USER_FAILURE: 'user/updateDataUserFailure',

    DELETE_USER: 'user/getDataUser',
    DELETE_USER_FETCH: 'user/deleteDataUserFetch',
    DELETE_USER_SUCCESS: 'user/deleteDataUserSuccess',
    DELETE_USER_FAILURE: 'user/deleteDataUserFailure',
}
  