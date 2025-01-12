import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/src/components/ui/card";

export const WhyHireMe = () => {
	return (
		<div className="w-full h-screen bg-[#3183FF]" id="whyHireMe">
			<section className="max-w-7xl mx-auto h-full px-5 border-t border-t-gray-600 pt-[14px]">
				<div className="h-full flex flex-col items-center justify-evenly">
					<h1 className="text-5xl font-bold text-white">
						Porque me contratar?
					</h1>
					<div className="flex items-center gap-5 mt-5 h-[350px]">
						{/* thinking... */}
					</div>
				</div>
			</section>
		</div>
	);
};
