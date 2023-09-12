import React, { useState } from "react";
import "../static/cartItem.css";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../slices/alertReducer";

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
	const dispatch = useDispatch();
	const qty = useSelector((state) => state.qty);
	const [netPrice, setNetPrice] = useState(
		(item.price * item.quantity).toFixed(2)
	);
	const [netQty, setNetQty] = useState(item.quantity);

	const handleQtyDecrease = (item) => {
		if (netQty > 0) {
			setNetQty(() => netQty - 1);
			setNetPrice(() => (netPrice - item.price).toFixed(2));
			onDecrease(item);
		}
	};

	const handleQtyIncrease = (item) => {
		if (qty < 8) {
			setNetQty(() => netQty + 1);
			setNetPrice(() => (Number(netPrice) + item.price).toFixed(2));
			onIncrease(item);
		} else {
			dispatch(
				showAlert({
					type: "Success",
					message: "Custom Pack limit reached. Please remove some chocos",
				})
			);
		}
	};

	return (
		<div className='cart-item'>
			<div className='cart-item-left'>
				<span className='cart-item-name'>{item.name}</span>
				<span className='cart-item-price'>${item.price}</span>
			</div>
			<div className='cart-item-quantity'>
				<button
					className='cart-item-btn'
					onClick={() => handleQtyDecrease(item)}
				>
					<img src='/path-6.svg' alt='add' />
				</button>
				<span className='cart-item-qty'>{netQty}</span>
				<button
					className='cart-item-btn'
					onClick={() => handleQtyIncrease(item)}
				>
					<img src='/combined-shape.svg' alt='add' />
				</button>
			</div>
			<div className='cart-item-total'>
				<span className='cart-item-total-price'>${netPrice}</span>
				<button className='cart-item-remove' onClick={() => onRemove(item)}>
					<img src='/trash.svg' alt='trash' />
				</button>
			</div>
		</div>
	);
}

export default CartItem;
