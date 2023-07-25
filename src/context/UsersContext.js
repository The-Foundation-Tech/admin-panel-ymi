import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		try {
			const response = await axios.get("/users");
			setUsers(response.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<UsersContext.Provider
			value={useMemo(() => ({ users, setUsers, getUsers }), [users])}
		>
			{children}
		</UsersContext.Provider>
	);
};
