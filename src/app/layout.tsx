import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		template: "%s | Portfolio Nathan Yan",
		default: "Home",
	},
	description:
		"Portfolio de Nathan Yan, desenvolvedor Full Stack. Aqui estão alguns projetos pessoais e formas de me contatar!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	);
}
