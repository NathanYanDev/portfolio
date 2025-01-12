"use client";

import Image from "next/image";
import Hero from "@/public/assets/hero.png";
import WhatsappIcon from "@/src/components/ui/icons/whatsapp";
import Link from "next/link";

import { useLanguage } from "../contexts/languageProvider";

export const Presentation = () => {
	const { language: lang } = useLanguage();

	return (
		<div className="w-full screen-height" id="presentation">
			<section className="max-w-7xl mx-auto px-5 screen-height flex items-center gap-12 mb-5">
				<div className="h-full">
					<Image src={Hero} alt="Hero image" className="h-full w-[600px]" />
				</div>
				<div className="flex flex-col">
					<h1 className="text-5xl font-bold">
						{lang === "pt-BR" ? "Olá, eu sou o " : "Hi, I'm "}
						Nathan
					</h1>
					<h2 className="text-2xl mb-5 text-[#3183FF]">Full Stack Developer</h2>
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
	);
};
