import { useState } from "react";
import SearchButton from "./SearchButton";
import errIcon from "/images/icon-error.svg";

const EmailInput = () => {
	const [invalidEmail, setInvalidEmail] = useState(false);
	const [email, setEmail] = useState("");

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	return (
		<>
			<div
				className={`${invalidEmail ? "border-primary-red" : "border-primary-pink"}
			border rounded-full h-15 w-full flex
			focus-within:border-2 `}
			>
				<input
					type="email"
					placeholder="Email Address"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					onBlur={() => setInvalidEmail(!emailRegex.test(email))}
					className="text-lg text-primary-pink border-none flex-1 px-6
						focus:ring-0 focus:border-none focus:outline-none"
				/>
				<img
					src={errIcon}
					alt="Error"
					className={`${invalidEmail ? "block" : "hidden"}
						self-center mr-4 h-[50%]`}
				/>
				<SearchButton />
			</div>
			<p
				className={`${invalidEmail ? "block" : "hidden"} 
					text-primary-red self-start text-sm mt-2 ml-6`}
			>
				Please provide a valid email
			</p>
		</>
	);
};

export default EmailInput;
