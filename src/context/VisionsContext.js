import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

export const VisionsContext = createContext();

export const VisionsProvider = ({ children }) => {
	const [visions, setVisions] = useState([]);

	const getVisions = async () => {
		try {
			const response = await axios.get("/visions");
			setVisions(response.data.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getVisions();
	}, []);

	return (
		<VisionsContext.Provider
			value={useMemo(() => ({ visions, setVisions, getVisions }), [visions])}
		>
			{children}
		</VisionsContext.Provider>
	);
};
