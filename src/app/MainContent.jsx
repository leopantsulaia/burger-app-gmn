import React from "react";
import MenuSection from "./MenuSection";
import OrderList from "../components/OrderList";
import Footer from "../components/Footer";

function MainContent({
	order,
	showOrder,
	handleAddToOrder,
	handleOrderClose,
	handleRemoveFromOrder,
}) {
	return (
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
						Experience the juiciest burgers and most refreshing drinks in town.
					</p>
					<a
						href='#menu'
						className='menu-card-btn'
						style={{ fontSize: "1.2rem", padding: "12px 36px" }}>
						View Menu
					</a>
				</div>
			</section>
			<MenuSection onAdd={handleAddToOrder} />
			{showOrder && (
				<OrderList
					order={order}
					onClose={handleOrderClose}
					onRemove={handleRemoveFromOrder}
				/>
			)}
			<Footer />
		</main>
	);
}

export default MainContent;
