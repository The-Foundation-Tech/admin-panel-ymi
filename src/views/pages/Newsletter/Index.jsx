import { NewsProvider } from "../../../context/NewsContext";
import Lists from "./Lists";

export default function Index() {
	return (
		<div className="p-8">
			<h3 className="text-2xl text-base-500">Newsletter</h3>

			<NewsProvider>
				<Lists />
			</NewsProvider>
		</div>
	);
}
