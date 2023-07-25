import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProgramsContext } from "../../../context/ProgramsContext";

export default function Create() {
	const { register, reset, handleSubmit } = useForm();
	const { programs, setPrograms } = useContext(ProgramsContext);

	const store = async (data) => {
		try {
			const response = await axios.post("/programs", data);
			setPrograms([...programs, response.data]);
			reset();
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			{/* Open the modal using ID.showModal() method */}
			<button
				className="btn btn-primary"
				onClick={() => window.modalCreate.showModal(false)}
			>
				Tambah Program
			</button>
			<dialog id="modalCreate" className="modal">
				<form className="modal-box" onSubmit={handleSubmit(store)}>
					<div className="form-control mb-3">
						<label className="label">
							<span className="label-text">Nama program</span>
						</label>
						<label className="input-group input-group-vertical">
							<input
								type="text"
								placeholder="Nama program"
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

					<div className="form-control mb-3">
						<label className="label">
							<span className="label-text">Image</span>
						</label>
						<label className="input-group input-group-vertical">
							<input
								type="file"
								placeholder="Image"
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
			</dialog>
		</>
	);
}
