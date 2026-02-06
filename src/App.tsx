import "./App.css";
import Logo from "./Logo";
import Content from "./Content";
import HeroImage from "./HeroImage";

function App() {
	return (
		<div
			className="bg-(image:--gradient-light) h-screen 
			xl:items-center xl:overflow-auto
			xl:grid xl:grid-cols-[2fr_1fr] xl:grid-rows-[auto_1fr] xl:gap-0"
		>
			<Logo />
			<HeroImage />
			<Content />
		</div>
	);
}

export default App;
