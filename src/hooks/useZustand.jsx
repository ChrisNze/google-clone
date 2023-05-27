import { create } from "zustand";

const useZustand = create((set) => ({
	darkMode: true,
	popUp: true,
	suggestionClosed: true,
	smShow: false,
	darkModeColorWhite: "rgba(255, 255, 255, 0.8)",
	darkModeOff: () => set((state) => ({ darkMode: !state.darkMode })),
	popUpOff: (popState) => set((state) => ({ popUp: popState })),
	suggestionClosedOff: (popstate) => set((state) => ({ suggestionClosed: popstate })),
	setSmShow: (popState) => set((state) => ({ smShow: popState })),
}));

export default useZustand;