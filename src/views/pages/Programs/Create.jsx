import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ProgramsContext } from "../../../context/ProgramsContext";
import toast from "react-hot-toast";
import Modals from "../../components/Modal";
import InputError from "../../components/InputError";

export default function Create() {
	const {
		register,
		setValue,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { programs, setPrograms } = useContext(ProgramsContext);
	const [isOpen, setIsOpen] = useState(false);

	const handleImage = (e) => {
		const image = e.target.files[0];
		setValue("image", image);
	};

	const store = async (data) => {
		try {
			const formData = new FormData();
			formData.append("name", data.name);
			formData.append("image", data.image[0]);
			formData.append("link", data.link);

			const response = await axios.post("/programs", formData, {
				headers: { "Content-Type": "multipart/form-data" },
			});

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
							{...register("name", {
								required: "Nama program tidak boleh kosong",
							})}
						/>

						<InputError errors={errors} name={"name"} />
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

						<InputError errors={errors} name={"link"} />
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
							accept=".png, .jpg, .jpeg"
							onChange={handleImage}
							{...register("image", { required: false })}
						/>

						<InputError errors={errors} name={"image"} />
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
