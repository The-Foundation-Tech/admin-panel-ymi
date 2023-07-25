import { UsersProvider } from "../../../context/UsersContext";
import Lists from "./Lists";

export default function Index() {
	return (
		<div className="p-8">
			<h3 className="text-2xl text-base-500">Users</h3>

			<UsersProvider>
				<Lists />
			</UsersProvider>
		</div>
	);
}
