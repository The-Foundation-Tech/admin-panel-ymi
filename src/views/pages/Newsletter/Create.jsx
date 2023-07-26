import axios from "axios";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Create() {
	const { register, handleSubmit, reset } = useForm();
	const editorRef = useRef(null);
	const redirect = useNavigate();

	const store = async (data) => {
		try {
			if (editorRef.current) {
				data.content = editorRef.current.getContent();
				data.slug = editorRef.current.getContent();
			}

			await axios.post("/newsletters", data);
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
								{...register("title", { required: true })}
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

					<div className="form-control mb-3">
						<label className="label">
							<span className="label-text">Thumbnail</span>
						</label>
						<label className="input-group input-group-vertical">
							<input
								type="file"
								placeholder="Thumbnail"
								className="input input-bordered"
								{...register("thumbnail", { required: false })}
							/>
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
