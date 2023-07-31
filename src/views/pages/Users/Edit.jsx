import axios from "axios";
import { useForm } from "react-hook-form";
import Modals from "../../components/Modal";
import { useContext, useState } from "react";
import { UsersContext } from "../../../context/UsersContext";
import toast from "react-hot-toast";
import InputError from "../../components/InputError";

export default function Edit({ user }) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const { getUsers } = useContext(UsersContext);
	const [isOpen, setIsOpen] = useState(false);

	const update = async (data) => {
		try {
			await axios.patch(`/users/${user._id}`, data);
			await getUsers();
			setIsOpen(!isOpen);
			reset();
			toast.success("Berhasil diupdate");
		} catch (error) {
			reset();
			toast.error(error.response?.data?.message);
		}
	};

	return (
		<Modals
			open={isOpen}
			setOpen={setIsOpen}
			style={`px-4 py-1 bg-green-500 rounded text-white`}
			btnTitle={"Edit"}
			modalId={`Edit`}
			modalTitle={"Edit User"}
		>
			<form onSubmit={handleSubmit(update)}>
				<div className="form-control mb-3">
					<label className="label">
						<span className="label-text">Nama</span>
					</label>
					<label className="input-group input-group-vertical">
						<input
							type="text"
							placeholder="Nama"
							className="input input-bordered"
							defaultValue={user.name}
							{...register("name", {
								required: "Nama tidak boleh kosong",
							})}
						/>

						<InputError errors={errors} name={"name"} />
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
							defaultValue={user.username}
							{...register("username", {
								required: "Nama pengguna tidak boleh kosong",
							})}
						/>

						<InputError errors={errors} name={"username"} />
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
							{...register("password", { required: false })}
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
