import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function FormEdit() {
	const [news, setNews] = useState(null);
	const { register, handleSubmit } = useForm();
	const { id } = useParams();

	const editorRef = useRef(null);
	const redirect = useNavigate();

	const getNews = async () => {
		try {
			const response = await axios.get(`/newsletters/${id}`);
			setNews(response.data);
		} catch (error) {
			toast.error(error.response?.data?.message);
		}
	};

	const update = async (data) => {
		try {
			if (editorRef.current) {
				data.content = editorRef.current.getContent();
				data.slug = editorRef.current.getContent();
			}
			await axios.patch(`/newsletters/${id}`, data);
			toast.success("Berhasil diupdate");
			redirect("/newsletters");
		} catch (error) {
			toast.error(error.response?.data?.message);
		}
	};

	useEffect(() => {
		getNews();
	}, []);

	return (
		<form className="" onSubmit={handleSubmit(update)}>
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
						defaultValue={news?.title}
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

			<div className="mb-8">
				<Editor
					apiKey="5knzkmy57dll3pfsstetioeckqi8eh0xm2f22yfopaycerf9"
					onInit={(evt, editor) => (editorRef.current = editor)}
					initialValue={news?.content}
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
	);
}
