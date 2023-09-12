import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../static/card.css";

import { showAlert } from "../slices/alertReducer";
import { addToCustomPack } from "../slices/customPackSlice";
import { setTotalPrice } from "../slices/totalPriceSlice";
import { setTotalQty } from "../slices/quantitySlice";

const Card = (props) => {
	const [showCard, setShowCard] = useState(false);

	const totalPrice = useSelector((state) => state.totalPrice);
	const qty = useSelector((state) => state.qty);
	const dispatch = useDispatch();
	const { product } = props;

	useEffect(() => {
		setShowCard(true);
	}, []);

	const handleAddToCustomPack = (product) => {
		if (qty < 8) {
			dispatch(addToCustomPack({ product }));
			dispatch(setTotalPrice(totalPrice + product.price));
			dispatch(setTotalQty(qty + 1));
			dispatch(
				showAlert({
					type: "Success",
					message: `${product.name} Added To Cart`,
				})
			);
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
		<div className={`card ${showCard ? "fade-enter" : ""}`}>
			<div className='card-body'>
				<div
					className='unsplash'
					style={{ backgroundImage: `url(${product.image})` }}
				>
					<div className='frame'>
						<img
							className='bxs-star-svg'
							alt='Bxs star svg'
							src='/bxs-star.svg.svg'
						/>
						<div className='text-wrapper'>{product.star}</div>
					</div>
				</div>
				<div className='div'>
					<div className='text-wrapper-2'>
						{product.name}
						<p className='product-description'>{product.description}</p>
					</div>
				</div>
			</div>
			<div className='card-footer'>
				<div className='text-wrapper-3'>${product.price}</div>
				<button
					type='button'
					className='btnCard'
					onClick={() => handleAddToCustomPack(product)}
				>
					<img
						className='bx-plus-medical-svg'
						alt='Bx plus medical svg'
						src='/bx-plus-medical-svg.svg'
					/>
				</button>
			</div>
		</div>
	);
};

export default Card;
