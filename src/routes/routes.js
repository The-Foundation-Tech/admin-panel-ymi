import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/pages/Home/Index";
import Newsletter from "../views/pages/Newsletter/Index";
import Users from "../views/pages/Users/Index";
import Programs from "../views/pages/Programs/Index";
import Settings from "../views/pages/Settings/Index";
import MainLayout from "../views/layouts/MainLayout";
import Create from "../views/pages/Newsletter/Create";
import Login from "../views/pages/Auth/Login";
import Authenticated from "../middlewares/Authenticated";
import Guest from "../middlewares/Guest";
import Edit from "../views/pages/Newsletter/Edit";

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

				{/* Route yang menggunakan Main layout */}
				<Route path="/" element={<MainLayout />}>
					<Route
						path="/"
						element={
							<Authenticated>
								<Home />
							</Authenticated>
						}
					/>

					<Route
						path="/newsletters"
						element={
							<Authenticated>
								<Newsletter />
							</Authenticated>
						}
					/>

					<Route
						path="/newsletter-create"
						element={
							<Authenticated>
								<Create />
							</Authenticated>
						}
					/>

					<Route
						path="/edit-news/:id"
						element={
							<Authenticated>
								<Edit />
							</Authenticated>
						}
					/>

					<Route
						path="/users"
						element={
							<Authenticated>
								<Users />
							</Authenticated>
						}
					/>

					<Route
						path="/programs"
						element={
							<Authenticated>
								<Programs />
							</Authenticated>
						}
					/>

					<Route
						path="/settings"
						element={
							<Authenticated>
								<Settings />
							</Authenticated>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
