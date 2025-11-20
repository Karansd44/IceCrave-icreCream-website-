const navLinks = [
 {
	id: "cocktails",
	title: "Flavors",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "art",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Chocolate Fudge Brownie",
	country: "US",
	detail: "Single Scoop",
	price: "$5",
 },
 {
	name: "Strawberry Cheesecake",
	country: "US",
	detail: "Double Scoop",
	price: "$8",
 },
 {
	name: "Mint Chocolate Chip",
	country: "US",
	detail: "Single Scoop",
	price: "$5",
 },
 {
	name: "Salted Caramel Swirl",
	country: "US",
	detail: "Double Scoop",
	price: "$8",
 },
];

const mockTailLists = [
 {
	name: "Hot Fudge Sundae",
	country: "US",
	detail: "Classic",
	price: "$9",
 },
 {
	name: "Banana Split Supreme",
	country: "US",
	detail: "Deluxe",
	price: "$12",
 },
 {
	name: "Caramel Crunch Sundae",
	country: "US",
	detail: "Premium",
	price: "$10",
 },
 {
	name: "Berry Blast Parfait",
	country: "US",
	detail: "Special",
	price: "$11",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Perfectly balanced flavors",
 "Topped to perfection",
 "Frozen fresh every time",
 "Expertly churned & scooped",
];

const goodLists = [
 "Handpicked ingredients",
 "Signature recipes",
 "Artisan craftsmanship in action",
 "Freshly churned flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Strawberry IceCream",
	image: "/images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "A swirl of pink soft-serve ice cream in a crispy waffle cone, topped with dark syrup drizzles and red sprinkles against a black background.",
 },
 {
	id: 2,
	name: "Vanilla Chocolate Drizzle",
	image: "/images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "This image features a swirl of creamy white soft-serve ice cream (likely vanilla) set inside a crisp, golden-brown waffle cone.",
 },
 {
	id: 3,
	name: "Matcha IceCream",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "This image features a tall, structured stack of light green ice cream, likely matcha (green tea) or pistachio flavor. The texture is unique, combining the porous look of hand-scooped ice cream with smooth, soft-serve-style ribbons swirling around the exterior.",
 },
 {
	id: 4,
	name: "Rich Dark Chocolate IceCream",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "This image showcases a classic, generous scoop of dark brown ice cream, likely dark chocolate or chocolate fudge. Unlike the soft-serve images, this scoop features distinct, rough ridges on top, characteristic of hard-scooped ice cream.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};