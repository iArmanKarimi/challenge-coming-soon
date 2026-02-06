import img from "/images/logo.svg";

const Logo = () => {
	return (
		<div className="flex items-center p-10 
			 xl:pt-[10vh] xl:px-[25%]">
			<img className="" src={img} alt="logo" />
		</div>
	);
};

export default Logo;
