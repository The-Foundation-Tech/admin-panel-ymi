import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Authenticated({ children }) {
	const { auth } = useContext(AuthContext);
	const redirect = useNavigate();

	useEffect(() => {
		if (!auth.isLogin) {
			redirect("/login");
		}
	}, [auth.isLogin]);

	return children;
}
