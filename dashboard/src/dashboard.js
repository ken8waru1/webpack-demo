import NavigationBar from "./components/navigation-bar/navigation-bar.js";

const navigationItems = [
	{
		url: "/hello-world-page",
		title: "Hello World Page",
	},
	{
		url: "/abiko-page",
		title: "Abiko Page",
	},
];
const url = window.location.pathname;

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

if (url === "/hello-world-page") {
	import("HelloWorldApp/HelloWorldPage").then((HelloWorldPageModule) => {
		const HelloWorldPage = HelloWorldPageModule.default;
		const helloWorldPage = new HelloWorldPage();
		helloWorldPage.render();
	});
}

if (url === "/abiko-page") {
	import("AbikoApp/AbikoPage").then((AbikoPageModule) => {
		const AbikoPage = AbikoPageModule.default;
		const abikoPage = new AbikoPage();
		abikoPage.render();
	});
}
