"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { playfairDisplay } from "./ui/fonts/fonts";
import { Button } from "./ui/button";
import {
	useLanguage,
	type TLanguageContext,
} from "../contexts/languageProvider";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/src/components/ui/select";
import React from "react";

export const Header = () => {
	const { theme, setTheme } = useTheme();
	const { language: lang, setLanguage } = useLanguage();

	const handleChangeTheme = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	const handleLangChange = (ev: TLanguageContext) => {
		setLanguage(ev);
	};

	return (
		<header className="w-full h-20 px-5 flex items-center shadow-md shadow-gray-300 dark:shadow-gray-600">
			<section className="w-full max-w-7xl mx-auto flex items-center justify-between">
				<Link href={"/"}>
					<h1 className={`text-5xl font-bold ${playfairDisplay.className}`}>
						Nathan Yan
					</h1>
				</Link>
				<nav className="flex items-center">
					<ul className="w-full flex items-center gap-3">
						<Link href={"/about"}>
							<li className="text-xl">
								{lang === "pt-BR" ? "Sobre" : "About"}
							</li>
						</Link>
						<Link href={"/projects"}>
							<li className="text-xl">
								{lang === "pt-BR" ? "Projetos" : "Projects"}
							</li>
						</Link>

						{/* TODO: COLOCAR O CURRÍCULO EM PT E EM EN NUM DRIVE E PEGAR O LINK */}
						{lang === "pt-BR" ? (
							<Link
								href={
									"https://www.dropbox.com/scl/fi/ulvvls861cy610uap2b75/Curriculo-Nathan-Yan.pdf?rlkey=jdjl4u49071t80pyvkow3ui95&st=ohm5001y&dl=0"
								}
								target="_blank"
								className="mr-3"
							>
								<li>
									<Button className="text-lg bg-[#3183FF]">Currículo</Button>
								</li>
							</Link>
						) : (
							<Link
								href={
									"https://www.dropbox.com/scl/fi/4hago46lfyq8qpdfwi3hs/Resume-Nathan-Yan.pdf?rlkey=gdigiw97mwmqyfnp7el4bb314&st=ovirsjsp&dl=0"
								}
								target="_blank"
								className="mr-3"
							>
								<li>
									<Button className="text-lg bg-[#3183FF]">Resume</Button>
								</li>
							</Link>
						)}
					</ul>
					<div className="flex items-center gap-3">
						<Select defaultValue="pt-BR" onValueChange={handleLangChange}>
							<SelectTrigger>
								<SelectValue placeholder="Selecione uma linguagem" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="pt-BR">Português - BR</SelectItem>
									<SelectItem value="en">English</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<motion.button
							whileHover={{ scale: 1.2 }}
							type="button"
							onClick={handleChangeTheme}
						>
							{theme === "light" ? <Sun /> : <Moon />}
						</motion.button>
					</div>
				</nav>
			</section>
		</header>
	);
};
