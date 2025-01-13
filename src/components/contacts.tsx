"use client";

import Link from "next/link";
import LinkedinIcon from "./ui/icons/linkedin";
import GitHubBlackIcon from "./ui/icons/githubBlack";
import GitHubWhiteIcon from "./ui/icons/githubWhite";
import { Mail } from "lucide-react";

import { useLanguage } from "../contexts/languageProvider";
import { useTheme } from "next-themes";

export const Contacts = () => {
	const { language } = useLanguage();
	const { theme } = useTheme();

	return (
		<div className="w-full h-screen">
			<section className="max-w-7xl mx-auto h-full px-5 border-t border-t-gray-600 pt-[14px]">
				<div className="h-full flex flex-col justify-evenly">
					<h1 className="text-6xl font-bold text-center">
						{language === "pt-BR" ? "Contatos" : "Contacts"}
					</h1>
					<div className="flex items-center justify-around mt-5 h-[350px]">
						<div className="flex items-center  gap-2  h-3/5 px-4">
							<LinkedinIcon fill="#0b65c3" width={80} height={80} />
							<Link
								href={"https://www.linkedin.com/in/nathan-yan-alves/"}
								target="_blank"
							>
								<span className="text-5xl">Nathan Yan</span>
							</Link>
						</div>
						<div className="flex items-center gap-2  h-3/5 px-4">
							{theme === "dark" ? (
								<GitHubWhiteIcon width={80} height={80} />
							) : (
								<GitHubBlackIcon width={80} height={80} />
							)}
							<Link href={"https://github.com/NathanYanDev"} target="_blank">
								<span className="text-5xl">Nathan Yan</span>
							</Link>
						</div>
						<div className="flex items-center  gap-2 h-3/5 px-4">
							<Mail width={80} height={80} />
							<Link href={"mailto:nathan.yan@zohomail.com"} target="_blank">
								<span className="text-5xl">Yan Dev</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
