import { createSlice } from "@reduxjs/toolkit";

const cartData = () => {
	const localCart = localStorage.getItem("customPack");
	if (localCart) {
		return JSON.parse(localCart);
	} else {
		localStorage.setItem("customPack", JSON.stringify([]));
		return [];
	}
};

const customPackSlice = createSlice({
	name: "customPack",
	initialState: [],
	reducers: {
		addToCustomPack: (state, action) => {
			const { product } = action.payload;
			const existingProduct = state.find((item) => item.id === product.id);

			if (existingProduct) {
				existingProduct.quantity += 1;
			} else {
				const productToAdd = { ...product, quantity: 1 };
				return [...state, productToAdd];
			}
		},
		removeFromCustomPack: (state, action) => {
			// Extract the product to be removed from the payload
			const { product } = action.payload;

			// Use the filter method to create a new array without the item to be removed
			const newState = state.filter((item) => item.id !== product.id);
			return [...newState];
		},
		substractFromCustomPack: (state, action) => {
			const { product } = action.payload;
			const existingProduct = state.find((item) => item.id === product.id);

			if (existingProduct) {
				existingProduct.quantity -= 1;
			}
		},
	},
});

export const {
	addToCustomPack,
	removeFromCustomPack,
	substractFromCustomPack,
} = customPackSlice.actions;
export default customPackSlice.reducer;
