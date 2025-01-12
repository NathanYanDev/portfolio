"use client";

import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import { CarouselItem } from "@/src/components/ui/carousel";
import { ExternalLink } from "lucide-react";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import GitHubBlackIcon from "./ui/icons/githubBlack";
import GitHubWhiteIcon from "./ui/icons/githubWhite";
import { useTheme } from "next-themes";
import { useLanguage } from "../contexts/languageProvider";

type CarouselDataProps = {
	item: {
		id: number;
		src: StaticImageData;
		alt: string;
		name: string;
		descriptionPT: string;
		descriptionEN: string;
		githubLink: string;
		externalLink: string;
	};
};

export const CarouselData = ({ item }: CarouselDataProps) => {
	const { theme } = useTheme();
	const { language } = useLanguage();

	return (
		<CarouselItem>
			<Card>
				<CardContent className="px-0">
					<Image
						src={item.src}
						alt={item.alt}
						className="rounded-t-xl border-b border-gray-400 h-[600px]"
						priority
					/>
				</CardContent>
				<CardFooter className="flex items-center justify-between ">
					<div className="flex flex-col">
						<h1 className="text-2xl font-bold">{item.name}</h1>
						<span className="text-base text-gray-600">
							{language === "pt-BR" ? item.descriptionPT : item.descriptionEN}
						</span>
					</div>
					<div className="flex items-center gap-3">
						<Link href={item.externalLink} target="_blank">
							<ExternalLink />
						</Link>

						<Link href={item.githubLink} target="_blank">
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
	);
};
