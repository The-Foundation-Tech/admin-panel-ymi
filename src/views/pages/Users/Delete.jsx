import { useContext, useState } from "react";
import { UsersContext } from "../../../context/UsersContext";
import { toast } from "react-hot-toast";
import Confirm from "../../components/Confirm";
import axios from "axios";

export default function Delete({ user, modalID }) {
	const [isOpen, setIsOpen] = useState(false);
	const { users, setUsers } = useContext(UsersContext);

	const destroy = async () => {
		try {
			await axios.delete(`/users/${user._id}`);
			setUsers(users.filter((selected) => user._id !== selected._id));
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
				modalId={`deleteUser${user._id}`}
				confirm={destroy}
			/>
		</>
	);
}
