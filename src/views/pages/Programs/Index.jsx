import { ProgramsProvider } from "../../../context/ProgramsContext";
import Lists from "./Lists";

export default function Index() {
	return (
		<div className="p-8">
			<h3 className="text-2xl text-base-500">Programs</h3>

			<ProgramsProvider>
				<Lists />
			</ProgramsProvider>
		</div>
	);
}
