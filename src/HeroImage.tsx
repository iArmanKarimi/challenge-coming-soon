import mobileHero from "/images/hero-mobile.jpg";

const HeroImage = () => {
	return (
		<img
			src={mobileHero}
			alt="Hero"
			className="w-full max-h-100 object-cover object-top"
		/>
	);
};

export default HeroImage;
