import React, { useContext, useEffect } from "react";
import { LoadUsers } from "../resources/LoadData";
import { GlobalContext } from "../context/GlobalState";

const ListUsersPage = () => {
	const GContext = useContext(GlobalContext);
	const { usersInfo, setUsersInfo } = GContext;

	useEffect(() => {
		LoadUsers(setUsersInfo);
	}, []);

	useEffect(() => {
		if (!usersInfo) {
			return;
		}
		console.log(usersInfo);
	}, [usersInfo]);

	return (
		<div>
			{usersInfo &&
				usersInfo.map((userInfo) => (
					<h2 key={userInfo.id}>{userInfo.email}</h2>
				))}
		</div>
	);
};

export default ListUsersPage;
