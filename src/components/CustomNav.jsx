import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap"; // Import Bootstrap components
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../static/navbar.css";

function CustomNavbar() {
	const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);
	const qty = useSelector((state) => state.qty);

	// Function to handle the collapse state
	const handleNavbarToggle = () => {
		setNavbarCollapsed(!isNavbarCollapsed);
	};

	// Function to handle link click
	const handleLinkClick = () => {
		if (!isNavbarCollapsed) {
			setNavbarCollapsed(true);
		}
	};

	return (
		<Navbar
			className={`custom-navbar ${isNavbarCollapsed ? "" : "show"}`}
			expand='lg'
		>
			<Link to='/' className='navbar-brand ms-5' onClick={handleLinkClick}>
				<img className='logo' src='/coco_logo.webp' alt='logo' />
			</Link>
			<Navbar.Toggle
				aria-controls='basic-navbar-nav'
				onClick={handleNavbarToggle}
			/>
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Link to='/' className='nav-link' onClick={handleLinkClick}>
						Home
					</Link>
					<Link to='/products' className='nav-link'>
						Chocolates
					</Link>
				</Nav>
				<Nav>
					<Link
						to='/cart'
						className='position-relative nav-link'
						onClick={handleLinkClick}
					>
						<button type='button' className='btnNav position-relative'>
							<img src='/Bag_alt_fill.svg' alt='Bag alt fill' />
							<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
								{qty}
							</span>
						</button>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default CustomNavbar;
