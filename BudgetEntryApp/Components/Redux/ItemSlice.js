import { createSlice } from "@reduxjs/toolkit";

export const ItemSlice = createSlice({
    name: 'BudgetItems',
    initialState: {
        data: []
    },
    reducers: {
        addItem(state, action) {
            state.data.push(action.payload)
        }
    }
})

export const { addItem } = ItemSlice.actions
export default ItemSlice.reducer