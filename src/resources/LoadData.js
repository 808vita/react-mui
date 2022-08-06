import axios from "axios";

export const LoadUsers = async (setUsersInfo) => {
	try {
		const response = await axios.get("https://reqres.in/api/users?page=1");
		console.log(response.data.data);
		setUsersInfo(response.data.data);
	} catch (error) {
		console.error(error);
		setUsersInfo([]);
	}
};

export const RegisterUser = async () => {
	try {
		const response = await axios.post("https://reqres.in/api/register", {
			email: "eve.holt@reqres.in",
			password: "pistol",
		});

		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
};
