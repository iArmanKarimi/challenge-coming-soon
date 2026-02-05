import React from "react";

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = React.useState<boolean>(
		() => window.matchMedia(query).matches,
	);

	React.useEffect(() => {
		const mediaQueryList: MediaQueryList = window.matchMedia(query);
		const listener = (event: MediaQueryListEvent) => {
			setMatches(event.matches);
		};

		mediaQueryList.addEventListener("change", listener);

		return () => {
			mediaQueryList.removeEventListener("change", listener);
		};
	}, [query]);

	return matches;
};

export default useMediaQuery;
