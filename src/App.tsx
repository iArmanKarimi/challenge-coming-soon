import "./App.css";
import Logo from "./Logo";
import Content from "./Content";
import HeroImage from "./HeroImage";

function App() {
	return (
		<div className="bg-(image:--gradient-light) h-screen">
			<Logo />
			<HeroImage />
			<Content />
		</div>
	);
}

export default App;
