import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { useController, useFormContext } from "react-hook-form";

export default function TextEditor({ name }) {
	const editorRef = useRef(null);

	return (
		<>
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
		</>
	);
}

// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// export default function TextEditor() {
// 	return (
// 		<CKEditor
// 			editor={ClassicEditor}
// 			onReady={(editor) => {
// 				console.log("Editor is ready to use!", editor);
// 			}}
// 			onChange={(event, editor) => {
// 				const data = editor.getData();
// 				console.log({ event, editor, data });
// 			}}
// 			onBlur={(event, editor) => {
// 				console.log("Blur.", editor);
// 			}}
// 			onFocus={(event, editor) => {
// 				console.log("Focus.", editor);
// 			}}
// 		/>
// 	);
// }
