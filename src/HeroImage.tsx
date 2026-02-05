import React from "react";
import desktopHero from "/images/hero-desktop.jpg";
import mobileHero from "/images/hero-mobile.jpg";

const HeroImage = () => {
	const whichHero = () =>
		window.innerWidth >= 1440 ? desktopHero : mobileHero;
	const [hero, setHero] = React.useState(whichHero());

	React.useEffect(() => {
		const handleResize = () => {
			setHero(whichHero());
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return <img src={hero} alt="Hero" className="w-full h-full object-cover" />;
};

export default HeroImage;
