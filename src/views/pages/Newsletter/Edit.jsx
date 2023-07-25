import { NewsProvider } from "../../../context/NewsContext";
import FormEdit from "./FormEdit";

export default function Edit() {
	return (
		<div className="p-8 w-full">
			<div className="w-[800px] h-[800px] bg-base-300 rounded p-4">
				<NewsProvider>
					<FormEdit />
				</NewsProvider>
			</div>
		</div>
	);
}
