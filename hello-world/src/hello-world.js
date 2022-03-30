import Heading from "./components/heading/heading.js";
import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";

const heading = new Heading();
heading.render("hello world");
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

// import("HelloWorldApp/HelloWorldButton").then((HelloWorldButtonModule) => {
// 	const HelloWorldButton = HelloWorldButtonModule.default;
// 	const helloWorldButton = new HelloWorldButton();
// 	helloWorldButton.render();
// });
