import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import IMG from "../../../assets/img/berita1.jpg";
import Highlight from "../../components/Highlight";

export default function NewsContent() {
	const [news, setNews] = useState({});
	const { id } = useParams();

	console.log(news);

	const getNews = async () => {
		try {
			const response = await axios.get(`/newsletters/${id}`);
			setNews(response.data);
		} catch (error) {
			toast.error(error.response?.data?.message);
		}
	};

	useEffect(() => {
		getNews();
	}, []);

	return (
		<div className="p-8 w-full">
			<div className="w-full flex justify-center items-center mb-10">
				{/* <img src={IMG} alt="img" className="rounded h-[500px] w-[900px] " /> */}
			</div>

			<h1 className="text-5xl text-center font-bold capitalize mb-10">
				{news.title}
			</h1>

			<Highlight>{news.content}</Highlight>
		</div>
	);
}
