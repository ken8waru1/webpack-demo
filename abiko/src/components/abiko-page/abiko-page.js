import Heading from "../heading/heading.js";
import AbikoImage from "../abiko-image/abiko-image.js";

class AbikoPage {
	render() {
		const heading = new Heading();
		heading.render("abiko");
		const abikoImage = new AbikoImage();
		abikoImage.render();

		import("ImageCaptionApp/ImageCaption").then((ImageCaptionModule) => {
			const ImageCaption = ImageCaptionModule.default;
			const imageCaption = new ImageCaption();
			imageCaption.render("OPTIMAL TEETH BRUSHING");
		});
	}
}

export default AbikoPage;
