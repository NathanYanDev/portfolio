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
					<h1 className="text-5xl font-bold text-white">
						{language === "pt-BR" ? "Porque me contratar?" : "Why hire me?"}
					</h1>
					<div className="flex items-center gap-5 mt-5 h-[350px]">
						<Card className="h-[250px] hover:scale-110">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Flag />
									Resolução de problemas
								</CardTitle>
							</CardHeader>
							<CardContent>
								Resiliência para resolver problemas simples, do cotidiano, e
								problemas complexos. Com muita calma e paciência, monto uma
								linha de raciocínio para uma melhor abordagem.
							</CardContent>
						</Card>
						<Card className="h-[250px] hover:scale-110">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Gem />
									Adaptabilidade
								</CardTitle>
							</CardHeader>
							<CardContent>
								Sempre pronto para aprender e me ajustar às novas tecnologias do
								mercado. Com foco em soluções inovadoras, enfrento desafios com
								flexibilidade e criatividade.
							</CardContent>
						</Card>
						<Card className="h-[250px] hover:scale-110">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Lightbulb />
									Aprendizagem contínua
								</CardTitle>
							</CardHeader>
							<CardContent>
								Estou constantemente realizando cursos online e participando de
								workshops para me manter atualizado com as últimas tendências e
								tecnologias do setor.
							</CardContent>
						</Card>
						<Card className="h-[250px] hover:scale-110">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Handshake />
									Trabalho em equipe
								</CardTitle>
							</CardHeader>
							<CardContent>
								Tenho experiência em trabalho em equipe, com boa comunicação e
								habilidade para colaborar com os colegas, visando entregar
								soluções eficientes.
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	);
};
