import { UtensilsCrossed } from "lucide-react";

function Header({ orderCount, onOrderClick }) {
	return (
		<header className='header-main'>
			<div className='header-inner'>
				<h1 className='header-title'>
					<UtensilsCrossed
						style={{ width: 32, height: 32, color: "#ffb347" }}
					/>
					Leo's Vadburger
				</h1>
				<nav className='header-nav'>
					<ul>
						<li>
							<a href='#menu'>Menu</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
						<li>
							<button
								className='menu-card-btn'
								style={{
									marginLeft: 16,
									fontSize: "1rem",
									padding: "8px 18px",
								}}
								onClick={onOrderClick}>
								Order {orderCount > 0 && <span>({orderCount})</span>}
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
