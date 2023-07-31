import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Alert from "../../components/Alert";
import InputError from "../../components/InputError";

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [error, setError] = useState(undefined);
	const { auth } = useContext(AuthContext);
	const redirect = useNavigate();

	const login = async (data) => {
		try {
			const response = await axios.post("/login", data);

			localStorage.setItem("user", response.data.user);
			localStorage.setItem("token", response.data.token);

			auth.setIsLogin(true);
			redirect("/");
		} catch (error) {
			setError(error.response?.data?.message);
		}
	};

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-center text-3xl mb-3">Login</h2>

					<div className="card-actions">
						{error && <Alert.AlertError message={error} />}

						<form onSubmit={handleSubmit(login)} className="w-full">
							<div className="form-control mb-3">
								<label className="label">
									<span className="label-text">Nama pengguna</span>
								</label>
								<label className="input-group input-group-vertical">
									<input
										type="text"
										placeholder="Pilih nama pengguna"
										className="input input-bordered"
										{...register("username", {
											required: "Username tidak boleh kosong",
										})}
									/>
								</label>

								<InputError errors={errors} name={"username"} />
							</div>

							<div className="form-control mb-8">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<label className="input-group input-group-vertical">
									<input
										type="password"
										placeholder="Password"
										className="input input-bordered"
										{...register("password", {
											required: "Password tidak boleh kosong",
										})}
									/>

									<InputError errors={errors} name={"password"} />
								</label>
							</div>

							<button type="submit" className="btn btn-primary w-full">
								LOGIN
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
