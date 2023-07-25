import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext";

axios.defaults.baseURL = "http://localhost:5000/api";
axios.interceptors.request.use((config) => {
	config.headers.Authorization = localStorage.getItem("token");
	return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AuthProvider>
		<App />
	</AuthProvider>
);

reportWebVitals();
