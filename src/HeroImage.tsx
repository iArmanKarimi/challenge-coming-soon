import { useState, useEffect } from "react";
import mobileHero from "/images/hero-mobile.jpg";
import desktopHero from "/images/hero-desktop.jpg";

const HeroImage = () => {
	const [img, setImg] = useState<string>(mobileHero);

	const pickImg = () =>
		window.innerWidth >= 1280 ? setImg(desktopHero) : setImg(mobileHero);

	useEffect(() => {
		pickImg();
		window.addEventListener("resize", pickImg);
		return () => window.removeEventListener("resize", pickImg);
	}, []);

	return (
		<img
			src={img}
			alt="Hero"
			className="w-full max-h-100 object-cover object-top 
			xl:row-span-2 xl:max-h-screen xl:h-screen xl:object-top"
		/>
	);
};

export default HeroImage;
