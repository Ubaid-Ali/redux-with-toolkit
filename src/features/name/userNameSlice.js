import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'userName',
    initialState: {
        value: 'Ubaid',
    },
    reducers: {
        changeUserName: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = 'UBAID';
        },
        changeNameByInput: (state, actions) => {
            state.value = actions.payload;
        },
    },
});

// Actions of State
export const { changeUserName, changeNameByInput } = userNameSlice.actions;

//  selector for use // useSelector((state) => state.userName.value)
export const selectUserName = state => state.userName.value;

export default userNameSlice.reducer;