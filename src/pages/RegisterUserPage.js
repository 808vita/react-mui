import React, { useEffect } from "react";
import { RegisterUser } from "../resources/LoadData";

const RegisterUserPage = () => {
	useEffect(() => {
		RegisterUser();
	}, []);

	return <div>RegisterUserPage</div>;
};

export default RegisterUserPage;
