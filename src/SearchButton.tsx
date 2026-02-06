import icon from "/images/icon-arrow.svg";

const SearchButton = () => {
	return (
		<div
			className="bg-(image:--gradient-pink) h-full w-20 rounded-full backdrop-blur-md
				shadow-lg shadow-primary-pink scale-105 hover:bg-(image:--gradient-pink-50) 
				flex justify-center items-center cursor-pointer"
		>
			<img src={icon} alt="Search" />
		</div>
	);
};

export default SearchButton;
