import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);
	const [user, setUser] = useState(null);

	const auth = {
		isLogin,
		setIsLogin,
		user,
		setUser,
	};

	useEffect(() => {
		const name = localStorage.getItem("user");
		const token = localStorage.getItem("token");
		setIsLogin(!!token);
		setUser(name);
	}, []);

	return (
		<AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
