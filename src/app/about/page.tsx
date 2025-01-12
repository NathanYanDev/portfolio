import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sobre",
};

export default function About() {
	return (
		<main className="w-full">
			<section className="max-w-7xl screen-height w-full mx-auto">
				<h1>About</h1>
			</section>
		</main>
	);
}
