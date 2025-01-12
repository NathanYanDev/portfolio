"use client";
import { useLanguage } from "../contexts/languageProvider";

type PageTitleProps = {
	titlePT: string;
	descriptionPT: string;
	titleEN: string;
	descriptionEN: string;
};

export const PageTitle = ({
	titlePT,
	descriptionPT,
	titleEN,
	descriptionEN,
}: PageTitleProps) => {
	const { language } = useLanguage();
	return (
		<div className="mb-5">
			<h1 className="text-5xl font-bold underline">
				{language === "pt-BR" ? titlePT : titleEN}
			</h1>
			<h2 className="text-lg text-gray-400 dark:text-gray-600">
				{language === "pt-BR" ? descriptionPT : descriptionEN}
			</h2>
		</div>
	);
};
