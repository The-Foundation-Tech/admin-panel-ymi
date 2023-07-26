import { useContext, useState } from "react";
import Confirm from "../../components/Confirm";
import axios from "axios";
import { ProgramsContext } from "../../../context/ProgramsContext";
import toast from "react-hot-toast";

export default function Delete({ program }) {
	const [isOpen, setIsOpen] = useState(false);
	const { programs, setPrograms } = useContext(ProgramsContext);

	const destroy = async () => {
		try {
			await axios.delete(`/programs/${program._id}`);
			setPrograms(
				programs.filter((selected) => program._id !== selected._id)
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
				modalId={`deleteProgram${program._id}`}
				confirm={destroy}
			/>
		</>
	);
}
