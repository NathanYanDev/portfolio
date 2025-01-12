"use client";

import { Presentation } from "../components/presentation";
import { WhyHireMe } from "../components/whyHireMe";

export default function Home() {
	return (
		<main
			className="w-full pt-5"
			onScrollCapture={(e) => console.log(e)}
			onScroll={(e) => console.log(e)}
		>
			<Presentation />
			<WhyHireMe />
		</main>
	);
}
