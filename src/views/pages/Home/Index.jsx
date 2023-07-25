import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function Home() {
	const { auth } = useContext(AuthContext);

	return (
		<div className="p-8">
			<div className="w-full h-[800px] flex justify-center items-center">
				<h3 className="text-5xl text-base-500">
					Assalamu'alaikum, {auth.user}
				</h3>
			</div>
		</div>
	);
}
