import { HashRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./components/HomePage";
import CartPage from "./components/CartPage";
import CustomNav from "./components/CustomNav";
import Alert from "./aaacomp/Alert";
import CartIcon from "./aaacomp/CartIcon";
import ProductsPage from "./components/ProductsPage";

import React, { useEffect } from "react";

function App() {
	useEffect(() => {
		// Function to handle scrolling
		function handleScroll() {
			const scrollY = window.scrollY;
			const body = document.body;

			if (scrollY > 75) {
				body.classList.add("scrolled");
			} else {
				body.classList.remove("scrolled");
			}
		}

		// Add the scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<>
			<Alert />
			<HashRouter basename='/'>
				<CustomNav />
				<Routes>
					<Route path='/' Component={Homepage} />
					<Route path='/products' Component={ProductsPage} />
					<Route path='/cart' Component={CartPage} />
				</Routes>
				<CartIcon />
			</HashRouter>
		</>
	);
}

export default App;
