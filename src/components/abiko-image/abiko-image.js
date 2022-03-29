import abiko from "./abiko.png";
import "./abiko-image.scss";

class AbikoImage {
	render() {
		const img = document.createElement("img");
		img.src = abiko;
		img.alt = "abiko";
		img.classList.add("abiko-image");

		const body = document.querySelector("body");
		body.appendChild(img);
	}
}

export default AbikoImage;
