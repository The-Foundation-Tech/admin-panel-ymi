import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);
	const [user, setUser] = useState("");

	const auth = {
		isLogin,
		setIsLogin,
		user,
		setUser,
	};

	return (
		<AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
