import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
	const [newsletters, setNewsletters] = useState([]);
	const [news, setNews] = useState(null);

	const getNewsletters = async () => {
		try {
			const response = await axios.get("/newsletters");
			setNewsletters(response.data);
		} catch (error) {
			toast.error(error.response?.data?.message);
		}
	};

	const getNews = async (paramsID) => {
		try {
			const response = await axios.get(`/newsletters/${paramsID}`);
			setNews(response.data);
		} catch (error) {
			toast.error(error.response?.data?.message);
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
					news,
					setNews,
					getNews,
				}),
				[newsletters]
			)}
		>
			{children}
		</NewsContext.Provider>
	);
};
