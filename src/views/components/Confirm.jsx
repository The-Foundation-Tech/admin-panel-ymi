import React from "react";

export default function Confirm({ confirm, modalId, open, setOpen }) {
	const handleOpen = () => setOpen(!open);

	return (
		<>
			<button
				onClick={handleOpen}
				className="px-4 py-1 bg-red-500 rounded text-white"
			>
				Delete
			</button>

			<input type="checkbox" id={modalId} className="modal-toggle" />
			<div className={`modal ${open ? "modal-open" : ""}`}>
				<div className="modal-box">
					<h3 className="font-bold text-2xl text-center">
						Yakin ingin menghapus data?
					</h3>
					<span className="flex justify-center py-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-20 w-20"
							fill="none"
							viewBox="0 0 24 24"
							stroke="red"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/>
						</svg>
					</span>
					<p className="py-4 text-center font-medium text-lg">
						Data yang sudah dihapus tidak bisa dikembalikan
					</p>
					<div className="flex gap-6 justify-center">
						<button
							onClick={confirm}
							className="btn bg-red-500 text-white border-0 hover:bg-red-700"
						>
							Ya
						</button>
						<button
							onClick={handleOpen}
							className="btn bg-cyan-500 text-white border-0 hover:bg-cyan-700"
						>
							Batal
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
