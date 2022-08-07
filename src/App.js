import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainLayout from "./layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import ListUsersPage from "./pages/ListUsersPage";
import RegisterUserPage from "./pages/RegisterUserPage";
import Toasts from "./components/Toasts";

function App() {
	return (
		<>
			<Header />
			<Toasts />
			<Routes>
				<Route
					expact
					path="/"
					element={<MainLayout children={<ListUsersPage />} />}
				/>
				<Route expact path="/list-users" element={<ListUsersPage />} />
				<Route expact path="/register" element={<RegisterUserPage />} />
			</Routes>
		</>
	);
}

export default App;
