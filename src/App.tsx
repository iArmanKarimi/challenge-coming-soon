import "./App.css";
import Logo from "./Logo";
import Content from "./Content";
import HeroImage from "./HeroImage";

function App() {
	return (
		<div
			className="bg-(image:--gradient-light) h-screen 
			xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-0"
		>
			<Logo />
			<HeroImage />
			<Content />
		</div>
	);
}

export default App;
