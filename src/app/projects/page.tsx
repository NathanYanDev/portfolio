import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/src/components/ui/carousel";

import { taskifyData, miniblogData } from "@/src/data/sources";

import { CarouselData } from "@/src/components/carouselData";

import type { Metadata } from "next";
import { PageTitle } from "@/src/components/pageTitle";
import { PageFooter } from "@/src/components/pageFooter";

export const metadata: Metadata = {
	title: "Projetos",
};

export default function Projects() {
	return (
		<main className="w-full">
			<section className="w-full max-w-7xl mx-auto flex flex-col items-center mt-5 px-7">
				<PageTitle
					titlePT="Projetos"
					titleEN="Projects"
					descriptionPT="Alguns projetos pessoais"
					descriptionEN="Some personal projects"
				/>
				<div className="w-full">
					<Carousel className="border dark:border-[#3183FF] rounded-xl mb-7">
						<CarouselContent>
							{taskifyData.map((item) => (
								<CarouselData item={item} key={item.id} />
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>

					<Carousel className="border dark:border-[#3183FF] rounded-xl mb-7">
						<CarouselContent>
							{miniblogData.map((item) => (
								<CarouselData item={item} key={item.id} />
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
					<PageFooter
						textPT={"Em breve mais projetos..."}
						textEN={"More projects coming soon..."}
					/>
				</div>
			</section>
		</main>
	);
}
