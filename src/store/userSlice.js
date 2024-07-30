import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: null,
        token : null,
        role : "admin"
    },
    reducers: {
        setUser: (state,action) => {
            state.username = action.payload.username;
            state.token = action.payload.token;
            state.role = action.payload.role || "admin";
        }
    }
})

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;