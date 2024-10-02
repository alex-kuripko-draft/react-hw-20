import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Bil' },
        { id: 3, name: 'Bob' },
    ],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});


export default userSlice.reducer;