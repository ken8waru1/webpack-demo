import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading.js";
import addImage from "./add-image.js";

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

heading.render();
helloWorldButton.render();
addImage();
