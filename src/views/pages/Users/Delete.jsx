import { useContext, useState } from "react";
import Confirm from "../../components/Confirm";
import axios from "axios";
import { UsersContext } from "../../../context/UsersContext";

export default function Delete({ user, modalID }) {
	const [isOpen, setIsOpen] = useState(false);
	const { users, setUsers } = useContext(UsersContext);

	const destroy = async () => {
		try {
			await axios.delete(`/users/${user._id}`);
			setUsers(users.filter((selected) => user._id !== selected._id));
		} catch (error) {
			console.log(error.message);
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
