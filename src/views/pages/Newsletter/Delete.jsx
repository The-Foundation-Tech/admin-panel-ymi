import { useContext, useState } from "react";
import Confirm from "../../components/Confirm";
import axios from "axios";
import { NewsContext } from "../../../context/NewsContext";

export default function Delete({ news }) {
	const [isOpen, setIsOpen] = useState(false);
	const { newsletters, setNewsletters } = useContext(NewsContext);

	const destroy = async () => {
		try {
			await axios.delete(`/newsletters/${news._id}`);
			setNewsletters(
				newsletters.filter((selected) => news._id !== selected._id)
			);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			<Confirm
				open={isOpen}
				setOpen={setIsOpen}
				modalId={`deleteNews${news._id}`}
				confirm={destroy}
			/>
		</>
	);
}
