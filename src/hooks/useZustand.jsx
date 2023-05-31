import { create } from "zustand";

const useZustand = create((set) => ({
	darkMode: true,
	popUp: true,
	suggestionClosed: true,
	smShow: false,
	search: "",
	searchOn: true,
	darkModeColorWhite: "#fff",
	setSearch: (e) => set((state) => ({ search: e.target.value })),
	setSearchOn: (searchState) => set((state) => ({ searchOn: searchState })),
	darkModeOff: () => set((state) => ({ darkMode: !state.darkMode })),
	popUpOff: (popState) => set((state) => ({ popUp: popState })),
	suggestionClosedOff: (popstate) => set((state) => ({ suggestionClosed: popstate })),
	setSmShow: (popState) => set((state) => ({ smShow: popState })),
}));

export default useZustand;
