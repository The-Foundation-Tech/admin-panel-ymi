import { useContext, useState } from "react";
import { NewsContext } from "../../../context/NewsContext";
import { toast } from "react-hot-toast";
import Confirm from "../../components/Confirm";
import axios from "axios";

export default function Delete({ news }) {
	const [isOpen, setIsOpen] = useState(false);
	const { newsletters, setNewsletters } = useContext(NewsContext);

	const destroy = async () => {
		try {
			await axios.delete(`/newsletters/${news._id}`);
			setNewsletters(
				newsletters.filter((selected) => news._id !== selected._id)
			);

			toast.success("Berhasil dihapus");
		} catch (error) {
			toast.error(error.response?.data?.message);
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
