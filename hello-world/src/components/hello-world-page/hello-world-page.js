import HelloWorldButton from "../hello-world-button/hello-world-button.js";
import Heading from "../heading/heading.js";

class HelloWorldPage {
	render() {
		const helloWorldButton = new HelloWorldButton();
		const heading = new Heading();

		heading.render("hello world");
		helloWorldButton.render();
	}
}

export default HelloWorldPage;
