import { createSlice } from "@reduxjs/toolkit"
import initialState from './../states/user.state'
import moment from "moment";

export const userState = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getDataUserFetch: (state) => {},
        getDataUserSuccess: (state, action) => {
            const rawData = action.payload.data;

            const dataUser = rawData.map((item: any, idx: number) => {
                const no = idx + 1;
                return {...item, no};
            })

            state.data = dataUser;
        },
        getDataUserFailure: (state, action) => {},
        createDataUserFetch: (state, action) => {},
        createDataUserSuccess: (state, action) => {},
        createDataUserFailure: (state, action) => {},
        getDataUserDetailFetch: (state, action) => {},
        getDataUserDetailSuccess: (state, action) => {
            state.detailUser = action.payload.data;
        },
        getDataUserDetailFailure: (state, action) => {},
        updateDataUserFetch: (state, action) => {},
        updateDataUserSuccess: (state, action) => {},
        updateDataUserFailure: (state, action) => {},
        deleteDataUserFetch: (state, action) => {},
        deleteDataUserSuccess: (state, action) => {},
        deleteDataUserFailure: (state, action) => {},
    }
})

export const {
    getDataUserFetch,
    getDataUserSuccess,
    getDataUserFailure,
    createDataUserFetch,
    createDataUserSuccess,
    createDataUserFailure,
    updateDataUserFetch,
    updateDataUserSuccess,
    updateDataUserFailure,
    deleteDataUserFetch,
    deleteDataUserSuccess,
    deleteDataUserFailure,
    getDataUserDetailFetch,
    getDataUserDetailSuccess,
    getDataUserDetailFailure
} = userState.actions;

export const userActions = userState.actions;
export const userReducers = userState.reducer;
export default userReducers;