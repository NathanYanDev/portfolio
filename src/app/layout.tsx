import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/src/contexts/themeProvider";
import { Header } from "../components/header";
import { jost } from "../components/ui/fonts/fonts";
import { LanguageProvider } from "../contexts/languageProvider";

export const metadata: Metadata = {
	title: {
		template: "%s | Portfolio Nathan Yan",
		default: "Home | Portfolio Nathan Yan",
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
		<html lang="pt-BR" className={jost.className}>
			<body className="antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<LanguageProvider>
						<Header />
						{children}
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
