import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/pages/Home/Index";
import Newsletter from "../views/pages/Newsletter/Index";
import Users from "../views/pages/Users/Index";
import Programs from "../views/pages/Programs/Index";
import MainLayout from "../views/layouts/MainLayout";
import Create from "../views/pages/Newsletter/Create";
import Login from "../views/pages/Auth/Login";
import Edit from "../views/pages/Newsletter/Edit";
import Detail from "../views/pages/Newsletter/Detail";
import ProtectedRoutes from "../middlewares/ProtectedRoute";
import Guest from "../middlewares/Guest";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Auth Route */}
				<Route
					path="/login"
					element={
						<Guest>
							<Login />
						</Guest>
					}
				/>

				{/* Protected Routes */}
				<Route path="/" element={<ProtectedRoutes />}>
					<Route path="/" element={<MainLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/newsletters" element={<Newsletter />} />
						<Route path="/newsletter-create" element={<Create />} />
						<Route path="/edit-news/:id" element={<Edit />} />
						<Route path="/detail-news/:id" element={<Detail />} />
						<Route path="/users" element={<Users />} />
						<Route path="/programs" element={<Programs />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
