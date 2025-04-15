import { useState } from "react";

function useOrder() {
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

	return {
		order,
		showOrder,
		handleAddToOrder,
		handleRemoveFromOrder,
		handleOrderClick,
		handleOrderClose,
	};
}

export default useOrder;
