import icon from "/images/icon-arrow.svg";
const EmailInput = () => {
	return (
		<div
			className="border-primary-pink 
			border rounded-full h-15 w-full flex
			focus-within:border-2 focus-within:border-primary-red"
		>
			<input
				type="email"
				placeholder="Email Address"
				className="text-lg text-primary-pink border-none flex-1 px-6
				focus:ring-0 focus:border-none focus:outline-none"
			/>
			<div
				className="bg-(image:--gradient-pink) h-full w-20 rounded-full backdrop-blur-md
				shadow-lg shadow-primary-pink scale-105 hover:bg-(image:--gradient-pink-50) 
				flex justify-center items-center cursor-pointer"
			>
				<img src={icon} alt="Search" />
			</div>
		</div>
	);
};

export default EmailInput;
