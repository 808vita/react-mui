import React from "react";
import "./App.css";
import Header from "./components/Header";

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
				<Route expact path="/" element={<RegisterUserPage />} />
				<Route expact path="/list-users" element={<ListUsersPage />} />
			</Routes>
		</>
	);
}

export default App;
