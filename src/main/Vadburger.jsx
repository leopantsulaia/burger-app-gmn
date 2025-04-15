import React from "react";
import Header from "../components/Header";
import MainContent from "../app/MainContent";
import Footer from "../components/Footer";
import useOrder from "../hooks/useOrder";
import "../styles/styles.css";

function Vadburger() {
	const {
		order,
		showOrder,
		handleAddToOrder,
		handleRemoveFromOrder,
		handleOrderClick,
		handleOrderClose,
	} = useOrder();

	return (
		<div>
			<Header
				orderCount={order.length}
				onOrderClick={handleOrderClick}
			/>
			<MainContent
				order={order}
				showOrder={showOrder}
				handleAddToOrder={handleAddToOrder}
				handleOrderClose={handleOrderClose}
				handleRemoveFromOrder={handleRemoveFromOrder}
			/>
			<Footer />
		</div>
	);
}

export default Vadburger;
