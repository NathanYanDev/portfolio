"use client";

import Image from "next/image";
import Hero from "@/public/assets/hero.png";
import WhatsappIcon from "../components/ui/icons/whatsappIcon";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/src/components/ui/card";
import { Info } from "lucide-react";

import { useLanguage } from "../contexts/languageProvider";

export default function Home() {
	const { language: lang } = useLanguage();
	return (
		<main className="w-full pt-5">
			<div className="w-full screen-height">
				<section className="max-w-7xl mx-auto px-5 screen-height flex items-center gap-12 mb-5">
					<div className="h-full">
						{/* TODO: COLOCAR UMA FOTO PESSOAL MINHA */}
						<Image src={Hero} alt="Hero image" className="h-full w-[600px]" />
					</div>
					<div className="flex flex-col">
						<h1 className="text-5xl font-bold">
							{lang === "pt-BR" ? "Olá, eu sou o " : "Hi, I'm "}
							<span className="text-[#3183FF]">Nathan Yan</span>
						</h1>
						<h2 className="text-2xl mb-5">Full Stack Developer</h2>
						<p className="dark:text-gray-400 text-gray-600 text-lg">
							{lang === "pt-BR"
								? "Grande entusiasta tecnológico, apaixonado em criar projetos minimalistas que unem simplicidade com alta funcionalidade."
								: "A great tech enthusiast, passionate about creating minimalist projects that combine simplicity with high functionality."}
						</p>
						<div className="flex items-center justify-center gap-3 mt-5">
							<Link
								href={
									"mailto:yan_dev@zohomail.com?subject=Tenho%20interesse%20em%20te%20contratar"
								}
							>
								<button
									type="button"
									className="px-4 py-2 border border-black dark:border-white rounded-3xl text-xl"
								>
									{lang === "pt-BR" ? "Contrate-me" : "Hire me"}
								</button>
							</Link>
							<Link href={"https://wa.me/5511998579175"}>
								<button
									type="button"
									className="px-4 py-2 border border-[#25D366] rounded-3xl  flex items-center gap-3 text-xl"
								>
									<WhatsappIcon width={24} height={24} />
									Whatsapp
								</button>
							</Link>
						</div>
					</div>
				</section>
			</div>
			<div className="w-full h-screen bg-[#3183FF]">
				<section className="max-w-7xl mx-auto h-full px-5 border-t border-t-gray-600 pt-[14px]">
					<div className="h-full flex flex-col items-center justify-evenly">
						<h1 className="text-5xl font-bold text-white">Sobre mim</h1>
						<div className="flex items-center gap-5 mt-5 h-[350px]">
							<Card className="h-full">
								<CardHeader>
									<CardTitle>
										<Info size={32} />
									</CardTitle>
									<CardDescription className="font-bold text-xl text-black">
										Experiencia
									</CardDescription>
								</CardHeader>
								<CardContent>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Incidunt nisi iste reprehenderit, quaerat architecto
									necessitatibus vitae saepe. Obcaecati magni unde delectus
									repellat quam. Iure consequuntur impedit, sit assumenda ab
									debitis!
								</CardContent>
							</Card>
							<Card className="h-full">
								<CardHeader>
									<CardTitle>Curiosidades</CardTitle>
									<CardDescription>
										Algumas curiosidades pessoais
									</CardDescription>
								</CardHeader>
								<CardContent>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Incidunt nisi iste reprehenderit, quaerat architecto
									necessitatibus vitae saepe. Obcaecati magni unde delectus
									repellat quam. Iure consequuntur impedit, sit assumenda ab
									debitis!
								</CardContent>
							</Card>
							<Card className="h-full">
								<CardHeader>
									<CardTitle>Curiosidades</CardTitle>
									<CardDescription>
										Algumas curiosidades pessoais
									</CardDescription>
								</CardHeader>
								<CardContent>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Incidunt nisi iste reprehenderit, quaerat architecto
									necessitatibus vitae saepe. Obcaecati magni unde delectus
									repellat quam. Iure consequuntur impedit, sit assumenda ab
									debitis!
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
