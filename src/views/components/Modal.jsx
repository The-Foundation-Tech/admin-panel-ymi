export default function Modals({
	style,
	btnTitle,
	modalId,
	modalWidth,
	modalTitle,
	open,
	setOpen,
	children,
}) {
	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div>
			{/* The button to open modal */}
			<button
				onClick={handleOpen}
				className={`${style ? style : "btn btn-sm modal-button"}`}
			>
				{btnTitle}
			</button>

			{/* Modal body */}
			<input type="checkbox" id={modalId} className="modal-toggle" />
			<div className={`modal ${open ? "modal-open" : ""}`}>
				<div className={`modal-box relative ${modalWidth}`}>
					<h3 className="mb-3 text-lg font-bold">{modalTitle}</h3>
					<button
						onClick={handleOpen}
						className="btn btn-sm btn-circle absolute right-2 top-2 bg-slate-700 border-0"
					>
						✕
					</button>
					{children}
				</div>
			</div>
		</div>
	);
}
