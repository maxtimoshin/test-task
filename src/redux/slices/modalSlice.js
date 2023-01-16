import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpened: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state) => {
            state.isModalOpened = !state.isModalOpened
        },
    }
})

export const { setModal } = modalSlice.actions

export default modalSlice.reducer