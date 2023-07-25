import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

export const ProgramsContext = createContext();

export const ProgramsProvider = ({ children }) => {
	const [programs, setPrograms] = useState([]);

	const getPrograms = async () => {
		try {
			const response = await axios.get("/programs");
			setPrograms(response.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getPrograms();
	}, []);

	return (
		<ProgramsContext.Provider
			value={useMemo(
				() => ({ programs, setPrograms, getPrograms }),
				[programs]
			)}
		>
			{children}
		</ProgramsContext.Provider>
	);
};
