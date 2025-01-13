"use client";

import { Contacts } from "../components/contacts";
import { Presentation } from "../components/presentation";
import { WhyHireMe } from "../components/whyHireMe";

export default function Home() {
	return (
		<main className="w-full pt-5">
			<Presentation />
			<WhyHireMe />
			<Contacts />
		</main>
	);
}
