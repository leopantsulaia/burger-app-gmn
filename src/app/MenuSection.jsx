import { Sandwich, GlassWater } from "lucide-react";
import menuData from "../data/data.json";
import MenuItem from "./MenuItem";

function MenuSection({ onAdd }) {
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

export default MenuSection;
