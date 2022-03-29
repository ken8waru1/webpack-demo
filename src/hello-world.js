import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading.js";

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

heading.render("hello world");
helloWorldButton.render();

if (process.env.NODE_ENV === "production") {
	console.log("Production");
}

if (process.env.NODE_ENV === "Development mode") {
	console.log("Development");
}
