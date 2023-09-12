import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

function AutoplayCarousel() {
	const [index, setIndex] = useState(0);

	// Function to handle when the carousel index changes
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	// Function to automatically advance the carousel
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % numberOfSlides);
		}, 3000); // Adjust the interval as needed (e.g., 3000ms = 3 seconds)

		return () => {
			clearInterval(interval); // Clear the interval when the component unmounts
		};
	}, []);

	const slides = [
		{ id: 1, caption: "Truffe Amande Au Miel", src: "banner1.webp" },
		{ id: 2, caption: "Whittakers", src: "banner2.webp" },
		{ id: 3, caption: "Cadbury", src: "banner3.webp" },
	];

	const numberOfSlides = slides.length;

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			{slides.map((slide) => (
				<Carousel.Item key={slide.id}>
					<img className='d-block w-100' src={slide.src} alt={slide.caption} />
					<Carousel.Caption>
						<h3>{slide.caption}</h3>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}

export default AutoplayCarousel;
