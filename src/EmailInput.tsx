import SearchButton from "./SearchButton";

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
			<SearchButton />
		</div>
	);
};

export default EmailInput;
