import EmailInput from "./EmailInput";

const Content = () => {
	return (
		<div
			className="flex flex-col justify-center items-center p-4 gap-1 text-center
			max-w-lg mx-auto pt-20 pb-50
			xl:max-w-full xl:pb-0
			xl:text-left xl:pt-0 xl:items-start xl:px-[25%] xl:mx-0 xl:w-full"
		>
			<h1 className="text-primary-pink tracking-widest text-6xl font-light">
				WE'RE
			</h1>
			<h1 className="text-neutral-gray text-7xl">
				COMING
				<br />
				SOON
			</h1>
			<p className="text-primary-pink text-xl pt-5 leading-8 mb-10">
				Hello fellow shoppers! We're currently building our new fashion store.
				Add your email below to stay up-to-date with announcements and our
				launch deals.
			</p>
			<EmailInput />
		</div>
	);
};

export default Content;
