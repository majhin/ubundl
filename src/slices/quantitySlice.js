import { createSlice } from "@reduxjs/toolkit";

const quantityReducer = createSlice({
	name: "qty",
	initialState: 0,
	reducers: {
		setTotalQty: (state, action) => {
			return action.payload;
		},
	},
});

export const { setTotalQty } = quantityReducer.actions;
export default quantityReducer.reducer;
