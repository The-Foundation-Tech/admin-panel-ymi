import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
	const [newsletters, setNewsletters] = useState([]);
	const [newsletter, setNewsletter] = useState(null);

	const getNewsletters = async () => {
		try {
			const response = await axios.get("/newsletters");
			setNewsletters(response.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	const getNewsletter = async (id) => {
		try {
			const response = await axios.get(`/newsletters/${id}`);
			setNewsletter(response.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getNewsletters();
	}, []);

	return (
		<NewsContext.Provider
			value={useMemo(
				() => ({
					newsletters,
					setNewsletters,
					getNewsletters,
					newsletter,
					setNewsletter,
					getNewsletter,
				}),
				[newsletters]
			)}
		>
			{children}
		</NewsContext.Provider>
	);
};
