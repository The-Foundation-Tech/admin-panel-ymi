import { ErrorMessage } from "@hookform/error-message";

export default function InputError({ errors, name, ...props }) {
	return (
		<div className="mt-2 text-sm text-red-500 italic">
			<ErrorMessage errors={errors} name={name} />
		</div>
	);
}
