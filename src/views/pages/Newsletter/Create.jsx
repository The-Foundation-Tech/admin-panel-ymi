import axios from "axios";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import InputError from "../../components/InputError";

export default function Create() {
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm();
	const editorRef = useRef(null);
	const redirect = useNavigate();

	const handleImage = (e) => {
		const image = e.target.files[0];
		setValue("image", image);
	};

	const store = async (data) => {
		try {
			if (editorRef.current) data.content = editorRef.current.getContent();

			const formData = new FormData();
			formData.append("title", data.title);
			formData.append("image", data.image[0]);
			formData.append("content", data.content);

			await axios.post("/newsletters", formData, {
				headers: { "Content-Type": "multipart/form-data" },
			});

			reset();
			toast.success("Berita berhasil ditambahkan");
			redirect("/newsletters");
		} catch (error) {
			toast.error(error.response?.data?.message);
		}
	};

	return (
		<div className="p-8 w-full">
			<div className="w-[800px] h-[800px] bg-base-300 rounded p-4">
				<form className="" onSubmit={handleSubmit(store)}>
					<div className="form-control mb-3">
						<label className="label">
							<span className="label-text">Judul berita</span>
						</label>
						<label className="input-group input-group-vertical">
							<input
								type="text"
								placeholder="Judul berita"
								className="input input-bordered"
								{...register("title", {
									required: "Judul berita tidak boleh kosong",
								})}
							/>

							<InputError errors={errors} name={"title"} />
						</label>
					</div>

					<div className="form-control mb-3">
						<label className="label">
							<span className="label-text">Image</span>
						</label>
						<label className="input-group input-group-vertical">
							<input
								type="file"
								accept=".png, .jpg, .jpeg"
								placeholder="Image"
								className="input input-bordered"
								onChange={handleImage}
								{...register("image", { required: false })}
							/>

							<InputError errors={errors} name={"image"} />
						</label>
					</div>

					<div className="mb-8">
						<Editor
							apiKey="5knzkmy57dll3pfsstetioeckqi8eh0xm2f22yfopaycerf9"
							onInit={(evt, editor) => (editorRef.current = editor)}
							init={{
								height: 500,
								menubar: true,
								plugins: ["lists"],
								toolbar:
									"undo redo | formatselect | " +
									"bold italic backcolor | alignleft aligncenter " +
									"alignright alignjustify | bullist numlist outdent indent | " +
									"removeformat | help",
								content_style:
									"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
							}}
						/>
					</div>

					<button
						type="submit"
						className="w-full px-4 py-3 bg-primary rounded-b-lg text-white font-semibold"
					>
						Simpan
					</button>
				</form>
			</div>
		</div>
	);
}
