import React, { useState } from "react";
import { Sandwich, GlassWater, UtensilsCrossed } from "lucide-react";
import "./styles/styles.css";
import menuData from "./data/data.json";
import Header from "./app/Header";

// Header Component


// Menu Item Card Component
function MenuItem({ item, onAdd }) {
	return (
		<div className='menu-card'>
			<img
				src={item.image}
				alt={item.name}
				className='menu-card-img'
				onError={e => {
					e.target.onerror = null;
					e.target.src =
						"https://placehold.co/300x200/cccccc/ffffff?text=Image+Not+Found";
				}}
			/>
			<div className='menu-card-inner'>
				<h3 className='menu-card-title'>{item.name}</h3>
				<p className='menu-card-desc'>{item.description}</p>
				<div className='menu-card-bottom'>
					<button
						className='menu-card-btn'
						onClick={() => onAdd(item)}>
						Add to Order
					</button>
					<span
						className='menu-card-price'
						style={{ color: "#fff" }}>
						${item.price?.toFixed(2)}
					</span>
				</div>
			</div>
		</div>
	);
}

// Menu Section Component
function Menu({ onAdd }) {
	return (
		<section
			id='menu'
			className='menu-section'>
			<div className='menu-container'>
				<h2 className='menu-title'>Our Delicious Menu</h2>
				<div>
					<h3 className='menu-section-title'>
						<Sandwich style={{ width: 28, height: 28, color: "#ffb347" }} />{" "}
						Burgers
					</h3>
					<div className='menu-grid'>
						{menuData.burgers.map(item => (
							<MenuItem
								key={item.id}
								item={item}
								onAdd={onAdd}
							/>
						))}
					</div>
				</div>
				<div>
					<h3 className='menu-section-title'>
						<GlassWater style={{ width: 28, height: 28, color: "#ffb347" }} />{" "}
						Soft Drinks
					</h3>
					<div className='menu-grid'>
						{menuData.drinks.map(item => (
							<MenuItem
								key={item.id}
								item={item}
								onAdd={onAdd}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

// Order List Component
function OrderList({ order, onClose, onRemove }) {
	const total = order.reduce((sum, item) => sum + (item.price || 0), 0);
	return (
		<div
			className='order-list-modal'
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				background: "rgba(0,0,0,0.6)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				zIndex: 1000,
			}}>
			<div
				style={{
					background: "#fff",
					color: "#222",
					borderRadius: 16,
					padding: 32,
					minWidth: 320,
					maxWidth: 400,
					boxShadow: "0 8px 32px #0008",
				}}>
				<h2 style={{ marginTop: 0, marginBottom: 24 }}>Your Order</h2>
				{order.length === 0 ? (
					<p>No items in order.</p>
				) : (
					<>
						<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
							{order.map((item, idx) => (
								<li
									key={idx}
									style={{
										marginBottom: 12,
										borderBottom: "1px solid #eee",
										paddingBottom: 8,
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									}}>
									<div>
										<strong>{item.name}</strong>{" "}
										<span style={{ color: "#888", marginLeft: 8 }}>
											${item.price?.toFixed(2)}
										</span>
									</div>
									<button
										onClick={() => onRemove(idx)}
										style={{
											background: "#ff3c6f",
											color: "#fff",
											border: "none",
											borderRadius: 6,
											padding: "4px 12px",
											cursor: "pointer",
											marginLeft: 12,
										}}>
										Remove
									</button>
								</li>
							))}
						</ul>
						<div
							style={{
								fontWeight: "bold",
								fontSize: "1.2rem",
								marginTop: 18,
								textAlign: "right",
							}}>
							Total: ${total.toFixed(2)}
						</div>
					</>
				)}
				<button
					className='menu-card-btn'
					style={{ marginTop: 24, width: "100%" }}
					onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
}

// Footer Component
function Footer() {
	return (
		<footer
			id='contact'
			className='footer-main'>
			<div className='footer-container'>
				<p>&copy; 2025 Leo's Vadburger. All rights reserved.</p>
				<p>Behind the Tbilisi Mall, Vigac Qalis Qucha Nomeric ar vici</p>
				<p>Phone: (555) 123-4567</p>
			</div>
		</footer>
	);
}

// Main App Component
function App() {
	const [order, setOrder] = useState([]);
	const [showOrder, setShowOrder] = useState(false);

	const handleAddToOrder = item => {
		setOrder(prev => [...prev, item]);
	};

	const handleRemoveFromOrder = idx => {
		setOrder(prev => prev.filter((_, i) => i !== idx));
	};

	const handleOrderClick = () => setShowOrder(true);
	const handleOrderClose = () => setShowOrder(false);

	return (
		<div>
			<Header
				orderCount={order.length}
				onOrderClick={handleOrderClick}
			/>
			<main>
				<section
					className='menu-section'
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						position: "relative",
					}}>
					<div
						className='menu-container'
						style={{
							textAlign: "center",
							paddingBottom: 40,
							background: "rgba(26,0,32,0.80)",
							borderRadius: 24,
							maxWidth: 700,
							margin: "0 auto",
							marginTop: 40,
							boxShadow: "0 8px 32px #0008",
						}}>
						<h2
							className='menu-title'
							style={{ color: "#fff" }}>
							Welcome to Leo's Vadburger!
						</h2>
						<p
							style={{
								color: "#ffb347",
								fontSize: "1.3rem",
								marginBottom: 32,
							}}>
							Experience the juiciest burgers and most refreshing drinks in
							town.
						</p>
						<a
							href='#menu'
							className='menu-card-btn'
							style={{ fontSize: "1.2rem", padding: "12px 36px" }}>
							View Menu
						</a>
					</div>
				</section>
				<Menu onAdd={handleAddToOrder} />
				{showOrder && (
					<OrderList
						order={order}
						onClose={handleOrderClose}
						onRemove={handleRemoveFromOrder}
					/>
				)}
			</main>
			<Footer />
		</div>
	);
}

export default App;
