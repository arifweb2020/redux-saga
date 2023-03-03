// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//     name: "Arif",
//     tech: "web developer"
// }


// const nameReducer = createReducer(initialState, (builder) => {
//     builder.addCase('USER_FETCH_SUCCEEDED', (state, action) => {
//         state.name = action.payload
//     })
// })

// export default nameReducer

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data:[]
}


export const dummyReducer = createSlice({

    name: "dummyList",
    initialState,
    reducers: {
        listNew: (state, action) => {
            state.data = action.payload
        },
    },
    extraReducers: (builder) => {

    }


})

export const { listNew } = dummyReducer.actions
export default dummyReducer.reducer


