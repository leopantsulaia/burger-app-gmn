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

export default OrderList;