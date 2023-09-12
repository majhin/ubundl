import { createSlice } from "@reduxjs/toolkit";
import chocolatesData from "../static/choco.json";

const initialState = chocolatesData;

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
});

export default productsSlice.reducer;
