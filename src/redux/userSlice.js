import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            name: "anna",
            email: "anjali@gmail.com",
        },

        // reducers: {
        //     update: (state, action) => {
        //         // action.payload = {"asdvs", "56758"}

        //         state.name = action.payload.name;
        //         state.email = action.payload.email;

        //     },
            
        // }

        pending: null,
        error: null,
      },
      reducers: {},
      extraReducers: {
        [updateUser2.pending]: (state) => {
          state.pending = true;
          state.error = false;
        },
        [updateUser2.fulfilled]: (state, action) => {
          state.userInfo = action.payload;
          state.pending = false;
        },
        [updateUser2.rejected]: (state) => {
          state.pending = false;
          state.error = true;
        },
        

    }
})

export const {updateStart, updateSuccess, updateFailure} = userSlice.actions;
export default userSlice.reducer;