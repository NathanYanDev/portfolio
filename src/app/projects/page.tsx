"use client";

import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/src/components/ui/carousel";
import Image from "next/image";

import TaskifyHomePreview from "@/public/assets/taskifyHome.png";
import TaskifyDashboardWithoutCommentPreview from "@/public/assets/taskifyDashboard1.png";
import TaskifyDashboardWithCommentPreview from "@/public/assets/taskifyDashboard2.png";
import TaskifyCommentPageLoginPreview from "@/public/assets/taskifyCommentTask.png";
import TaskifyCommentPagePreview from "@/public/assets/taskifyCommentTask2.png";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import GitHubWhiteIcon from "@/src/components/ui/icons/githubWhite";
import GitHubBlackIcon from "@/src/components/ui/icons/githubBlack";

import { useTheme } from "next-themes";

export default function Projects() {
	const { theme } = useTheme();

	const carouselData = [
		{ id: 1, src: TaskifyHomePreview, alt: "Taskify home preview" },
		{
			id: 2,
			src: TaskifyDashboardWithoutCommentPreview,
			alt: "Taskify dashboard preview",
		},
		{
			id: 3,
			src: TaskifyDashboardWithCommentPreview,
			alt: "Taskify dashboard preview",
		},
		{
			id: 4,
			src: TaskifyCommentPageLoginPreview,
			alt: "Taskify comment page preview",
		},
		{
			id: 5,
			src: TaskifyCommentPagePreview,
			alt: "Taskify comment page preview",
		},
	];
	return (
		<main className="w-full">
			<section className="w-full max-w-7xl mx-auto flex flex-col items-center mt-5 px-7">
				<div className="mb-5">
					<h1 className="text-5xl font-bold underline">Projetos</h1>
					<h2 className="text-lg text-gray-400 dark:text-gray-600">
						Alguns projetos pessoais
					</h2>
				</div>
				<div>
					<Carousel className="border dark:border-[#3183FF] rounded-xl ">
						<CarouselContent>
							{carouselData.map((item) => (
								<CarouselItem key={item.id}>
									<Card>
										<CardContent className="px-0">
											<Image
												src={item.src}
												alt={item.alt}
												className="rounded-t-xl border-b border-gray-400"
												priority
											/>
										</CardContent>
										<CardFooter className="flex items-center justify-between ">
											<div className="flex flex-col">
												<h1 className="text-2xl font-bold">Taskify</h1>
												<span className="text-base text-gray-600">
													Gerenciador de tarefas
												</span>
											</div>
											<div className="flex items-center gap-3">
												<Link href={"https://taskify-flax-eta.vercel.app/"}>
													<ExternalLink />
												</Link>

												<Link href={"https://github.com/NathanYanDev/taskify"}>
													{theme === "dark" ? (
														<GitHubWhiteIcon width={24} height={24} />
													) : (
														<GitHubBlackIcon width={24} height={24} />
													)}
												</Link>
											</div>
										</CardFooter>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</section>
		</main>
	);
}
