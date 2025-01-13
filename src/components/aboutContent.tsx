"use client";

import { GraduationCap } from "lucide-react";
import CssIcon from "./ui/icons/css";
import FirebaseIcon from "./ui/icons/firebase";
import HtmlIcon from "./ui/icons/html";
import JavascriptIcon from "./ui/icons/javascript";
import MongoDBIcon from "./ui/icons/mongodb";
import MysqlIcon from "./ui/icons/mysql";
import NextIcon from "./ui/icons/next";
import NodeIcon from "./ui/icons/node";
import ReactIcon from "./ui/icons/react";
import TailwindIcon from "./ui/icons/tailwind";
import TypescriptIcon from "./ui/icons/typescript";
import VercelIcon from "./ui/icons/vercel";

import { useLanguage } from "../contexts/languageProvider";
import { useTheme } from "next-themes";

export const AboutContent = () => {
	const { language } = useLanguage();
	const { theme } = useTheme();
	return (
		<div>
			<article className="flex flex-col items-center mb-5">
				<h1 className="text-2xl font-bold mb-3">
					{language === "pt-BR" ? "Quem sou eu?" : "Who am I?"}
				</h1>
				<p>
					{language === "pt-BR"
						? "Sou Técnico em Informática e atualmente curso Bacharelado em Ciência da Computação. Busco minha primeira oportunidade profissional na área	de TI, com o objetivo de aplicar e aprimorar meus conhecimentos. Complemento minha formação com cursos online, mantendo-me atualizado sobre as tendências do mercado. Tenho grande interesse em aprender, crescer profissionalmente e colaborar em projetos desafiadores."
						: "I am an IT Technician and currently pursuing a Bachelor's degree in Computer Science. I am seeking my first professional opportunity in the IT field, with the goal of applying and enhancing my knowledge. I complement my education with online courses, keeping myself updated on market trends. I have a strong interest in learning, growing professionally, and collaborating on challenging projects."}
				</p>
			</article>
			<article className="flex flex-col items-center mb-5">
				<h1 className="text-2xl font-bold mb-3">
					{language === "pt-BR" ? "Formação" : "Education"}
				</h1>
				<div className="w-full">
					<div className="w-full mb-5">
						<div className="w-full flex items-center justify-between border-b border-gray-400">
							<div className="flex items-center">
								<GraduationCap />
								<h3 className="text-lg font-bold ml-1 ">
									{language === "pt-BR"
										? "Técnico em Informática | Técnico"
										: "IT Technician | Technician"}
								</h3>
							</div>
							<span>2017 - 2018</span>
						</div>
						<span className="mt-1">ETEC Vasco Antonio Venchiarutti</span>
					</div>
					<div className="w-full flex items-center justify-between border-b border-gray-400">
						<div className="flex items-center">
							<GraduationCap />
							<h3 className="text-lg font-bold ml-1 ">
								{language === "pt-BR"
									? "Ciências da computação | Bacharelado"
									: "Computer Science | Bachelor's Degree"}
							</h3>
						</div>
						<span>
							{language === "pt-BR" ? "2024 - Presente" : "2024 - Ongoing"}
						</span>
					</div>
					<span className="mt-1">Unianchieta</span>
				</div>
			</article>
			<article className="flex flex-col items-center mb-5">
				<h1 className="text-2xl font-bold mb-4">
					{language === "pt-BR" ? "Tecnologias utilizadas" : "Techs used"}
				</h1>
				<div className="grid grid-cols-4 grid-rows-3 gap-x-7 gap-y-3">
					<HtmlIcon width={64} height={64} />
					<CssIcon width={64} height={64} />
					<TailwindIcon width={64} height={64} />
					<JavascriptIcon width={64} height={64} />
					<TypescriptIcon width={64} height={64} />
					<ReactIcon width={64} height={64} />

					<NextIcon
						width={64}
						height={64}
						fill={theme === "dark" ? "#FFF" : "#000"}
					/>
					<NodeIcon width={64} height={64} />
					<MysqlIcon width={64} height={64} />
					<FirebaseIcon width={64} height={64} />
					<MongoDBIcon width={64} height={64} />
					<VercelIcon
						width={64}
						height={64}
						fill={theme === "dark" ? "#FFF" : "#000"}
					/>
				</div>
			</article>
		</div>
	);
};
