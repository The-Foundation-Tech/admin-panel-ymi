import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UsersContext } from "../../../context/UsersContext";
import { toast } from "react-hot-toast";
import Modals from "../../components/Modal";

export default function Create() {
	const [isOpen, setIsOpen] = useState(false);
	const { register, reset, handleSubmit } = useForm();
	const { users, setUsers } = useContext(UsersContext);

	const store = async (data) => {
		try {
			const response = await axios.post("/users", data);
			setUsers([...users, response.data]);
			reset();
			toast.success("Berhasil ditambahkan");
		} catch (error) {
			toast.error(error.response?.data.message);
		}
	};

	return (
		<Modals
			open={isOpen}
			setOpen={setIsOpen}
			style={`btn btn-primary`}
			btnTitle={"Tambah User"}
			modalId={`Tambah`}
			modalTitle={"Tambah User"}
		>
			<form onSubmit={handleSubmit(store)}>
				<div className="form-control mb-3">
					<label className="label">
						<span className="label-text">Nama</span>
					</label>
					<label className="input-group input-group-vertical">
						<input
							type="text"
							placeholder="Nama"
							className="input input-bordered"
							{...register("name", { required: true })}
						/>
					</label>
				</div>

				<div className="form-control mb-3">
					<label className="label">
						<span className="label-text">Nama pengguna</span>
					</label>
					<label className="input-group input-group-vertical">
						<input
							type="text"
							placeholder="Nama pengguna"
							className="input input-bordered"
							{...register("username", { required: true })}
						/>
					</label>
				</div>

				<div className="form-control mb-5">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<label className="input-group input-group-vertical">
						<input
							type="text"
							placeholder="Password"
							className="input input-bordered"
							{...register("password", { required: true })}
						/>
					</label>
				</div>

				<button
					type="submit"
					className="w-full px-4 py-3 bg-primary rounded-b-lg text-white font-semibold"
				>
					Simpan
				</button>
			</form>
		</Modals>
	);
}
