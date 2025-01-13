"use client";

import { TriangleAlert } from "lucide-react";
import { useLanguage } from "../contexts/languageProvider";

type PageFooterProps = {
	textPT: string;
	textEN: string;
};

export const PageFooter = ({ textPT, textEN }: PageFooterProps) => {
	const { language } = useLanguage();

	return (
		<div className="flex items-center justify-center gap-3">
			<TriangleAlert />
			<h2 className="text-2xl py-4">
				{language === "pt-BR" ? textPT : textEN}
			</h2>
		</div>
	);
};
