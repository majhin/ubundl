import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../static/cart.css";
import CartItem from "../aaacomp/CartItem";
import { setTotalPrice } from "../slices/totalPriceSlice";
import { setTotalQty } from "../slices/quantitySlice";
import {
	addToCustomPack,
	removeFromCustomPack,
	substractFromCustomPack,
} from "../slices/customPackSlice";

function CartPage() {
	const totalPrice = useSelector((state) => state.totalPrice);
	const customPack = useSelector((state) => state.customPack);
	const qty = useSelector((state) => state.qty);
	const dispatch = useDispatch();

	const handleRemove = (product) => {
		dispatch(setTotalPrice(totalPrice - product.quantity * product.price));
		dispatch(setTotalQty(qty - product.quantity));
		dispatch(substractFromCustomPack({ product }));
		dispatch(removeFromCustomPack({ product }));
	};

	const handleIncrease = (product) => {
		if (qty < 8) {
			dispatch(setTotalPrice(totalPrice + product.price));
			dispatch(setTotalQty(qty + 1));
			dispatch(addToCustomPack({ product }));
		}
	};

	const handleDecrease = (product) => {
		if (qty > 0) {
			dispatch(setTotalPrice(totalPrice - product.price));
			dispatch(setTotalQty(qty - 1));
			dispatch(substractFromCustomPack({ product }));
		}
	};

	return (
		<>
			<div className='container cartbg'>
				<h2>
					Review Your Order ( {qty} {qty == 1 ? "Item" : "Items"} )
				</h2>
				{customPack.map((product) => (
					<CartItem
						key={product.id}
						item={product}
						onIncrease={handleIncrease}
						onDecrease={handleDecrease}
						onRemove={handleRemove}
					/>
				))}
				{totalPrice > 0.0 ? (
					<p style={{ margin: "5px", color: "#654321ff" }}>
						Grand Total: $ <strong>{Math.round(totalPrice * 100) / 100}</strong>
					</p>
				) : (
					""
				)}
			</div>
		</>
	);
}

export default CartPage;
