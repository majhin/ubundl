import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../static/cartIcon.css";

function CartIcon() {
	const qty = useSelector((state) => state.qty);

	return (
		<Link to='/cart' className='cart-icon'>
			<button type='button' className='btn btn-warning'>
				<img src='/Bag_alt_fill.svg' alt='Bag alt fill' />
				<span className='position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger'>
					{qty}
				</span>
			</button>
		</Link>
	);
}

export default CartIcon;
