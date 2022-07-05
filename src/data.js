import {
	IoLogoYoutube,
	IoLogoFacebook,
	IoLogoGithub,
	IoLogoInstagram,
	IoMdAddCircle,
	IoIosCheckmarkCircle,
	IoIosArrowRoundForward,
} from "react-icons/io";

import Features1Img from "./assets/img/features-1.JPG";
import Features2Img from "./assets/img/features-2.jpeg";
import ChairImg from "./assets/img/chair.JPG";
import BedImg from "./assets/img/bed.JPG";
import DrawerImg from "./assets/img/drawer.JPG";
import LightingImg from "./assets/img/lighting.JPG";
import Product1Img from "./assets/img/products/product-1.JPG";
import Product2Img from "./assets/img/products/product-2.JPG";
import Product3Img from "./assets/img/products/product-3.jpeg";
import Product4Img from "./assets/img/products/product-4.jpg";
import Product5Img from "./assets/img/products/product-5.jpg";
import Product6Img from "./assets/img/products/product-6.jpg";
import Product7Img from "./assets/img/products/product-7.jpg";
import Product8Img from "./assets/img/products/product-8.png";
import Product9Img from "./assets/img/products/product-9.jpg";
import Product10Img from "./assets/img/products/product-10.jpg";
import TestimonialImg from "./assets/img/testimonial.jpg";
import Avatar1Img from "./assets/img/avatar-1.png";
import Avatar2Img from "./assets/img/avatar-2.png";
import Avatar3Img from "./assets/img/avatar-3.png";
import ComingSoonImg from "./assets/img/products/coming-soon.jpg";

export const navigation = [
	{
		name: "home",
		href: "home",
	},
	{
		name: "about",
		href: "about",
	},
	{
		name: "features",
		href: "features",
	},
	{
		name: "contact",
		href: "contact",
	},
];

export const hero = {
	title: "Furniture for the Future",
	subtitle:
		"You future home starts here. Our Furniture is imported from various Artists, Studios, and Companies around the world. 25% of all proceeds go to art charities around the world to support struggling artists.",
	buttonText: "Shop Now",
};

export const stats = [
	{
		value: "12+",
		text: "Years Experience",
	},
	{
		value: "270+",
		text: "Stores Opened Worldwide",
	},
	{
		value: "32k+",
		text: "Furniture sold",
	},
	{
		value: "350+",
		text: "Variant Furniture",
	},
];

export const features = {
	image: <Features1Img />,
	title: "Aesthetics Takes A Different Course",
	subtitle:
		"Our high-tech furniture is equipped with Google Home, Amazon Alexa, Bluetooth 5.0, USB-C/Lightning charging capability, and much more...",
	buttonText: "Show Now",
	items: [
		{
			icon: <IoIosCheckmarkCircle />,
			title: "Don't Like It? Trade In or Upgrade",
			subtitle:
				"Trade in your Zevi Furniture models for credit towards a new one, or credit towards your account. All trade in offers must be within 90-days of purchase.",
		},
		{
			icon: <IoIosCheckmarkCircle />,
			title: "Development of Furniture Models",
			subtitle:
				"Future models are currently still in development. Join our mailing list to keep up to date with our future products.",
		},
	],
	feature2: {
		image: <Features2Img />,
		title: "The Best Furniture Manufacturer Of Your Choice",
		subtitle:
			"All Zevi products come built-in with Bluetooth 5.0 and smartphone capability. Enjoy full remote access to your favorite shows and movies with the Zevi App.",
	},
};

export const newInStore = {
	title: "Newly Released Products",
	subtitle:
		"Check out the newest Zevi products along with the best-selling classics",
	link: "Check all",
	icon: <IoIosArrowRoundForward />,
	products: [
		{
			name: "chair",
			image: <ChairImg />,
		},
		{
			name: "bed",
			image: <BedImg />,
		},
		{
			name: "drawer",
			image: <DrawerImg />,
		},
		{
			name: "lighting",
			image: <LightingImg />,
		},
	],
};

export const products = {
	title: "Zevi Loyalty Program",
	subtitle:
		"All items that are purchased from Zevi give loyalty credits towards your Zevi account. Returning customers can use these credits to receive discounts on select products.",
	pages: [
		{
			productList: [
				{
					image: <Product1Img />,
					icon: <IoMdAddCircle />,
					name: "Apple MacBook Pro 2022 (13-inch)",
					price: 800,
					oldPrice: 1299,
				},
				{
					image: <Product2Img />,
					icon: <IoMdAddCircle />,
					name: "Apple Airpods (3rd Generation)",
					price: 150,
					oldPrice: 179.99,
				},
				{
					image: <Product3Img />,
					icon: <IoMdAddCircle />,
					name: "Beats Solo3 Wireless On Ear Headphones",
					price: 120,
					oldPrice: 149.99,
				},
				{
					image: <Product4Img />,
					icon: <IoMdAddCircle />,
					name: "Razer Blade 15 Gaming Laptop (RTX 3080)",
					price: 2300,
					oldPrice: 2799.99,
				},
				{
					image: <Product5Img />,
					icon: <IoMdAddCircle />,
					name: "Razer BlackWidow V3 Pro Wireless Gaming Keyboard",
					price: 170,
					oldPrice: 229.99,
				},
				{
					image: <Product6Img />,
					icon: <IoMdAddCircle />,
					name: "Razer DeathAdder Elite",
					price: 40,
					oldPrice: 69.99,
				},
				{
					image: <Product7Img />,
					icon: <IoMdAddCircle />,
					name: "Razer Goliathus Alpha Soft Gaming Mouse Pad",
					price: 5,
					oldPrice: 10.99,
				},
				{
					image: <Product8Img />,
					icon: <IoMdAddCircle />,
					name: "Samsung Galaxy Watch4",
					price: 250,
					oldPrice: 299.99,
				},
				{
					image: <Product9Img />,
					icon: <IoMdAddCircle />,
					name: "Apple IPhone 12 Pro 128GB (Graphite)",
					price: 500,
					oldPrice: 779,
				},
				{
					image: <Product10Img />,
					icon: <IoMdAddCircle />,
					name: "Samsung Galaxy Z Flip 3 (Lavender)",
					price: 500,
					oldPrice: 799.99,
				},
			],
		},
		{
			productList: [
				{
					image: <ComingSoonImg />,
					icon: <IoMdAddCircle />,
					name: "TBA",
					price: "N/A",
					oldPrice: "N/A",
				},
				{
					image: <ComingSoonImg />,
					icon: <IoMdAddCircle />,
					name: "TBA",
					price: "N/A",
					oldPrice: "N/A",
				},
				{
					image: <ComingSoonImg />,
					icon: <IoMdAddCircle />,
					name: "TBA",
					price: "N/A",
					oldPrice: "N/A",
				},
				{
					image: <ComingSoonImg />,
					icon: <IoMdAddCircle />,
					name: "TBA",
					price: "N/A",
					oldPrice: "N/A",
				},
				{
					image: <ComingSoonImg />,
					icon: <IoMdAddCircle />,
					name: "TBA",
					price: "N/A",
					oldPrice: "N/A",
				},
				{
					image: <ComingSoonImg />,
					icon: <IoMdAddCircle />,
					name: "TBA",
					price: "N/A",
					oldPrice: "N/A",
				},
				{
					image: <ComingSoonImg />,
					icon: <IoMdAddCircle />,
					name: "TBA",
					price: "N/A",
					oldPrice: "N/A",
				},
				{
					image: <ComingSoonImg />,
					icon: <IoMdAddCircle />,
					name: "TBA",
					price: "N/A",
					oldPrice: "N/A",
				},
				{
					image: <ComingSoonImg />,
					icon: <IoMdAddCircle />,
					name: "TBA",
					price: "N/A",
					oldPrice: "N/A",
				},
				{
					image: <ComingSoonImg />,
					icon: <IoMdAddCircle />,
					name: "TBA",
					price: "N/A",
					oldPrice: "N/A",
				},
			],
		},
	],
};

export const testimonial = {
	title: "Here's What Our Customers Think",
	image: <TestimonialImg />,
	persons: [
		{
			avatar: <Avatar1Img />,
			name: "Emma Smith",
			occupation: "Manager for The New York Times",
			message:
				"“Zevi is innovating when it comes to the furniture business. There is no company like this that's for sure.”",
		},
		{
			avatar: <Avatar2Img />,
			name: "Diana Perez",
			occupation: "Manager for The Wall Street Journal",
			message:
				"“Incredible furniture at unbeatable prices. Beats Wayfair or Ikea any day of the week.”",
		},
		{
			avatar: <Avatar3Img />,
			name: "Kenny McGarth",
			occupation: "Manager for The Washington Post",
			message:
				"“Zevi's reward program alone makes purchasing products here worth it.”",
		},
	],
};

export const newsletter = {
	title: "Be On Alert For Future Products",
	subtitle: "Join our mailing list",
	placeholder: "Your email address",
	buttonText: "Sign Up",
};

export const footer = {
	social: [
		{
			icon: <IoLogoYoutube />,
			href: "#",
		},
		{
			icon: <IoLogoInstagram />,
			href: "#",
		},
		{
			icon: <IoLogoGithub />,
			href: "#",
		},
		{
			icon: <IoLogoFacebook />,
			href: "#",
		},
	],
	copyright: "Zevi 2022 - All Rights Reserved.",
};
