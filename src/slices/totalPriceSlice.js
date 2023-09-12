import { createSlice } from "@reduxjs/toolkit";

const totalPriceReducer = createSlice({
	name: "totalPrice",
	initialState: 0,
	reducers: {
		setTotalPrice: (state, action) => {
			return action.payload;
		},
	},
});

export const { setTotalPrice } = totalPriceReducer.actions;
export default totalPriceReducer.reducer;
