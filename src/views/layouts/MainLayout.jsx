import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout() {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex w-full">
			<Sidebar open={open} />
			<div className="flex-1 overflow-x-hidden overflow-y-auto">
				<Navbar open={open} setOpen={setOpen} />
				<Outlet />
			</div>
		</div>
	);
}
