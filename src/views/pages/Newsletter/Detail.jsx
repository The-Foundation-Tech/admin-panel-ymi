import { NewsProvider } from "../../../context/NewsContext";
import NewsContent from "./NewsContent";

export default function Detail() {
	return (
		<div className="p-8 w-full">
			<NewsProvider>
				<NewsContent />
			</NewsProvider>
		</div>
	);
}
