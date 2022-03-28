import abiko from "./abiko.png";
import altText from "./altText.txt";

function addImage() {
	const img = document.createElement("img");
	img.alt = altText;
	img.width = 150;
	img.src = abiko;
	const body = document.querySelector("body");
	body.appendChild(img);
}

export default addImage;
