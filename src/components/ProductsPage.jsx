import React from "react";
import { useSelector } from "react-redux";
import Card from "../aaacomp/Card"; // Import your Card component
import "../static/productPage.css";

function ProductsPage() {
	const products = useSelector((state) => state.products);

	return (
		<div className='container'>
			<div className='row justify-content-between'>
				{products.map((product) => (
					<div key={product.name} className='col-md-4 mb-3'>
						<Card product={product} />
					</div>
				))}
			</div>
		</div>
	);
}

export default ProductsPage;
