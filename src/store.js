import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import customPackReducer from "./slices/customPackSlice";
import alertReducer from "./slices/alertReducer";
import totalPriceReducer from "./slices/totalPriceSlice";
import quantityReducer from "./slices/quantitySlice";

const store = configureStore({
	reducer: {
		products: productsReducer,
		customPack: customPackReducer,
		alert: alertReducer,
		totalPrice: totalPriceReducer,
		qty: quantityReducer,
	},
});

export default store;
