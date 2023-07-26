import { useForm } from "react-hook-form";
import Modals from "../../components/Modal";
import { useContext, useState } from "react";
import axios from "axios";
import { ProgramsContext } from "../../../context/ProgramsContext";
import toast from "react-hot-toast";

export default function Edit({ program }) {
	const { register, handleSubmit, reset } = useForm();
	const { getPrograms } = useContext(ProgramsContext);
	const [isOpen, setIsOpen] = useState(false);

	const update = async (data) => {
		try {
			await axios.patch(`/programs/${program._id}`, data);
			await getPrograms();
			setIsOpen(!isOpen);
			reset();
			toast.success("Berhasil diubah");
		} catch (error) {
			toast.error(error.response?.data?.message);
		}
	};

	return (
		<>
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
							<span className="label-text">Nama program</span>
						</label>
						<label className="input-group input-group-vertical">
							<input
								type="text"
								placeholder="Nama"
								className="input input-bordered"
								defaultValue={program.name}
								{...register("name", { required: false })}
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
								placeholder="Nama pengguna"
								className="input input-bordered"
								defaultValue={program.link}
								{...register("link", { required: true })}
							/>
						</label>
					</div>

					<div className="form-control mb-5">
						<label className="label">
							<span className="label-text">Image</span>
						</label>
						<label className="input-group input-group-vertical">
							<input
								type="file"
								placeholder="image"
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
		</>
	);
}
