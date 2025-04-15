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

export default MenuItem;