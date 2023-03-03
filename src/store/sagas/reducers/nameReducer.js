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
    name: "Arif",
    tech: "Web developer"
}


export const nameReducer = createSlice({

    name: "nameList",
    initialState,
    reducers: {
        nameList: (state, action) => {
            state.name = action.payload
        },
        techChng: (state, action) => {
            state.tech = action.payload
        }

    },
    extraReducers: (builder) => {

    }


})

export const { nameList, techChng } = nameReducer.actions
export default nameReducer.reducer


