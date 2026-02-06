import mobileHero from "/images/hero-mobile.jpg";
import desktopHero from "/images/hero-desktop.jpg";
import useIsXL from "./hooks/useIsXL";

const HeroImage = () => {
	const isXL = useIsXL();
	const img = isXL ? desktopHero : mobileHero;

	return (
		<img
			src={img}
			alt="Hero"
			className="w-full max-h-100 object-cover object-top 
			xl:row-span-2 xl:max-h-full xl:h-full"
		/>
	);
};

export default HeroImage;
