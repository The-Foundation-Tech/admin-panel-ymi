import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
	return useContext(AuthContext);
};

export default function ProtectedRoutes({ path, ...props }) {
	const { auth } = useAuth();
	return auth.isLogin ? <Outlet /> : <Navigate to={"/login"} exact />;
}
