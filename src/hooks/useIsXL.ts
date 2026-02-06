import { useState, useEffect } from "react";

const XL_QUERY = "(min-width: 1280px)";

const useIsXL = () => {
	const [isXL, setIsXL] = useState<boolean>(() =>
		typeof window !== "undefined" ? window.matchMedia(XL_QUERY).matches : false
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia(XL_QUERY);
		const handleChange = (e: MediaQueryListEvent) => setIsXL(e.matches);

		mediaQuery.addEventListener("change", handleChange);
		setIsXL(mediaQuery.matches); // Set initial value

		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return isXL;
}

export default useIsXL;
