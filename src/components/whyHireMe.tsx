"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/src/components/ui/card";

import { useLanguage } from "../contexts/languageProvider";
import { Flag, Gem, Handshake, Lightbulb } from "lucide-react";

export const WhyHireMe = () => {
	const { language } = useLanguage();
	return (
		<div className="w-full h-screen bg-[#3183FF]" id="whyHireMe">
			<section className="max-w-7xl mx-auto h-full px-5 border-t border-t-gray-600 pt-[14px]">
				<div className="h-full flex flex-col items-center justify-evenly">
					<h1 className="text-6xl font-bold text-white">
						{language === "pt-BR" ? "Porque me contratar?" : "Why hire me?"}
					</h1>
					<div className="flex items-center gap-5 mt-5 h-[350px]">
						<Card className="h-[250px] hover:scale-110">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-lg">
									<Flag />
									{language === "pt-BR"
										? "Resolução de problemas"
										: "Problem Solving"}
								</CardTitle>
							</CardHeader>
							<CardContent>
								{language === "pt-BR"
									? "Resiliência para resolver problemas simples, do cotidiano, e problemas complexos. Com muita calma e paciência, monto uma linha de raciocínio para uma melhor abordagem."
									: "Resilience to solve simple, everyday problems, and complex ones. With a lot of calm and patience, I build a line of reasoning for a better approach."}
							</CardContent>
						</Card>
						<Card className="h-[250px] hover:scale-110">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-lg">
									<Gem />
									{language === "pt-BR" ? "Adaptabilidade" : "Adaptability"}
								</CardTitle>
							</CardHeader>
							<CardContent>
								{language === "pt-BR"
									? "Sempre pronto para aprender e me ajustar às novas tecnologias do mercado. Com foco em soluções inovadoras, enfrento desafios com flexibilidade e criatividade."
									: "Always ready to learn and adapt to new market technologies. With a focus on innovative solutions, I face challenges with flexibility and creativity."}
							</CardContent>
						</Card>
						<Card className="h-[250px] hover:scale-110">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-lg">
									<Lightbulb />
									{language === "pt-BR"
										? "Aprendizagem contínua"
										: "Continuous learning"}
								</CardTitle>
							</CardHeader>
							<CardContent>
								{language === "pt-BR"
									? "Estou constantemente realizando cursos online e participando de workshops para me manter atualizado com as últimas tendências e tecnologias do setor."
									: "I am constantly taking online courses and participating in workshops to stay updated with the latest trends and technologies in the industry."}
							</CardContent>
						</Card>
						<Card className="h-[250px] hover:scale-110">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-lg">
									<Handshake />
									{language === "pt-BR" ? "Trabalho em equipe" : "Teamwork"}
								</CardTitle>
							</CardHeader>
							<CardContent>
								{language === "pt-BR"
									? "Tenho experiência em trabalho em equipe, com boa comunicação e habilidade para colaborar com os colegas, visando entregar soluções eficientes."
									: "I have experience in teamwork, with good communication skills and the ability to collaborate with colleagues to deliver efficient solutions."}
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	);
};
