import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ProgramsContext } from "../../../context/ProgramsContext";
import toast from "react-hot-toast";
import Modals from "../../components/Modal";

export default function Create() {
	const { register, reset, handleSubmit } = useForm();
	const { programs, setPrograms } = useContext(ProgramsContext);
	const [isOpen, setIsOpen] = useState(false);

	const store = async (data) => {
		try {
			const response = await axios.post("/programs", data);
			setPrograms([...programs, response.data]);
			reset();
			setIsOpen(!isOpen);
			toast.success("Berhasil ditambahkan");
		} catch (error) {
			toast.error(error.response?.data?.message);
		}
	};

	return (
		<Modals
			open={isOpen}
			setOpen={setIsOpen}
			style={`btn btn-primary`}
			btnTitle={"Tambah Progam"}
			modalId={`Tambah`}
			modalTitle={"Tambah Program"}
		>
			<form onSubmit={handleSubmit(store)}>
				<div className="form-control mb-3">
					<label className="label">
						<span className="label-text">Nama program</span>
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
						<span className="label-text">Link informasi</span>
					</label>
					<label className="input-group input-group-vertical">
						<input
							type="text"
							placeholder="Link informasi"
							className="input input-bordered"
							{...register("link", { required: false })}
						/>
					</label>
				</div>

				<div className="form-control mb-5">
					<label className="label">
						<span className="label-text">Foto</span>
					</label>
					<label className="input-group input-group-vertical">
						<input
							type="file"
							className="input input-bordered"
							{...register("image", { required: false })}
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
