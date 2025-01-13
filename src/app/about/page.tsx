import { PageTitle } from "@/src/components/pageTitle";
import type { Metadata } from "next";

import Image from "next/image";

import Dev from "@/public/assets/dev.jpg";

import { AboutContent } from "@/src/components/aboutContent";

export const metadata: Metadata = {
	title: "Sobre",
};

export default function About() {
	return (
		<main className="w-full screen-height">
			<section className="max-w-7xl w-full mx-auto flex flex-col items-center mt-5 px-[18px]">
				<PageTitle
					titlePT="Sobre"
					titleEN="About"
					descriptionPT="Saiba mais sobre mim"
					descriptionEN="Learn more about me"
				/>
				<div className="grid grid-cols-2 gap-2 justify-items-center">
					<Image
						src={Dev}
						alt="Personal image"
						className="w-3/4 rounded border border-gray-400 p-1 shadow-xl"
					/>
					<AboutContent />
				</div>
			</section>
		</main>
	);
}
