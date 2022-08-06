import axios from "axios";

export const LoadUsers = async (setUsersInfo) => {
	try {
		const response = await axios.get("https://reqres.in/api/users?page=1");
		// console.log(response.data);
		setUsersInfo(response.data.data);
	} catch (error) {
		console.error(error);
		setUsersInfo([]);
	}
};
