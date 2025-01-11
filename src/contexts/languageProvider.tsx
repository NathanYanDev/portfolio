"use client";

import type React from "react";
import { useState, createContext, useContext } from "react";

export type TLanguageContext = "pt-BR" | "en";

type TContextValue = {
	language: TLanguageContext;
	setLanguage: React.Dispatch<TLanguageContext>;
};

const LanguageContext = createContext<TContextValue>({
	language: "pt-BR",
	setLanguage: () => {},
});

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
	const [language, setLanguage] = useState<TLanguageContext>("pt-BR");

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

const useLanguage = () => {
	const context = useContext(LanguageContext);

	if (!context) throw new Error("Use context inside an Provider");

	return context;
};

export { useLanguage, LanguageProvider };
