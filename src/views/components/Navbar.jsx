import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar({ open, setOpen }) {
	const { auth } = useContext(AuthContext);
	const redirect = useNavigate();

	const signout = async () => {
		try {
			const response = await axios.post("/logout");
			localStorage.removeItem("token");
			auth.setIsLogin(false);
			redirect("/login");

			console.log(response.data.message);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="navbar shadow-lg bg-base-100 sticky top-0">
			<div className="flex-1">
				<button
					className="btn btn-square btn-ghost"
					onClick={() => setOpen(!open)}
					tabIndex={-1}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-5 h-5 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</button>
			</div>

			<div className="flex-none mr-10">
				<div className="dropdown dropdown-end">
					<div className="flex items-center">
						<label
							tabIndex={-1}
							className="m-1 capitalize peer cursor-pointer"
						>
							{auth.user}
						</label>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 peer-focus:rotate-90 duration-200"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
					<button
						tabIndex={-1}
						onClick={signout}
						className="dropdown-content menu hover:overflow-hidden focus:overflow-hidden bg-base-300 shadow-xl opacity-80 rounded-box w-52 p-4 text-lg hover:bg-gray-300 hover:text-white font-semibold"
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
}
