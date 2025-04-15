const styles = {
	// Layout
	header:
		"min-h-screen bg-gradient-to-br from-magenta-dark via-magenta to-black font-sans flex flex-col",
	header1:
		"bg-gradient-to-r from-magenta-dark to-magenta-light shadow-xl sticky top-0 z-10",
	div: "container mx-auto flex justify-between items-center py-6 px-4",
	grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",

	// Text & Links
	h1: "text-3xl md:text-4xl font-bold flex items-center gap-3 text-white",
	a: "text-white hover:text-accent-yellow transition-colors duration-300",
	utensilsCrossed: "w-8 h-8 text-accent-orange",

	// Menu Items
	div1: "bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-accent-pink/10",
	img: "w-full h-48 object-cover hover:opacity-90 transition-opacity",
	menuItemInner: "p-6",
	menuItemTitle: "text-xl font-bold text-magenta-light mb-2",
	menuItemDesc: "text-gray-600 mb-4 min-h-[60px]",
	menuItemBottom: "flex justify-between items-center mt-4",
	menuItemPrice: "text-2xl font-bold text-accent-orange",
	button:
		"bg-gradient-to-r from-accent-pink to-accent-orange text-white px-6 py-2 rounded-full hover:from-accent-orange hover:to-accent-yellow transition-all duration-300 shadow-md hover:shadow-xl",

	// Sections
	menuSection:
		"py-20 bg-gradient-to-br from-magenta-dark via-magenta to-black min-h-screen",
	menuContainer: "container mx-auto px-4",
	menuTitle:
		"text-4xl md:text-5xl font-bold text-center text-accent-yellow mb-16",
	burgersSection: "mb-20",
	sectionTitle:
		"text-3xl font-bold text-accent-yellow mb-10 flex items-center justify-center gap-3",

	// Footer
	footer:
		"bg-gradient-to-r from-magenta-dark to-magenta-light text-white py-12 mt-auto",
	footerContainer: "container mx-auto text-center px-4",
	footerP: "text-xl mb-4",
	footerAddress: "text-gray-300 text-lg",

	// Hero Section
	section:
		"bg-gradient-to-br from-magenta via-magenta-light to-magenta-dark text-white py-32 text-center",
	h2: "text-5xl md:text-6xl font-extrabold mb-8 animate-pulse drop-shadow-lg font-serif tracking-tight text-accent-yellow",
	p: "text-xl md:text-2xl mb-12 text-gray-200 font-medium max-w-2xl mx-auto",
	menu: "inline-block bg-accent-yellow text-magenta-dark font-bold py-4 px-12 rounded-full hover:bg-accent-orange hover:text-white transition-all duration-300 shadow-xl text-xl transform hover:scale-105",
};

export default styles;
