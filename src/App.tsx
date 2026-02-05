import "./App.css";
import Logo from "./Logo";
import Content from "./Content";
import HeroImage from "./HeroImage";
import EmailInput from "./EmailInput";

function App() {
	return (
		<div className="bg-(image:--gradient-light) h-screen">
			<Logo />
			<HeroImage />
			<Content />
			<EmailInput />
		</div>
	);
}

export default App;
