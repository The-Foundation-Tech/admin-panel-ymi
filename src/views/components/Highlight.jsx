import DOMPurify from "dompurify";

export default function Highlight({ children }) {
	return (
		<div
			className="prose max-w-none prose-img:rounded-lg"
			dangerouslySetInnerHTML={{
				__html: DOMPurify.sanitize(children),
			}}
		/>
	);
}
