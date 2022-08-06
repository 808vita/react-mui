import React, { useContext, useEffect } from "react";
import { LoadUsers } from "../resources/LoadData";
import { GlobalContext } from "../context/GlobalState";
import ListUsersLayout from "../layout/ListUsersLayout";

const ListUsersPage = () => {
	const GContext = useContext(GlobalContext);
	const { usersInfo, setUsersInfo } = GContext;

	useEffect(() => {
		LoadUsers(setUsersInfo);
	}, []);

	useEffect(() => {
		if (usersInfo === []) {
			return;
		}
		console.log(usersInfo);
	}, [usersInfo]);

	return (
		<>
			<ListUsersLayout usersInfo={usersInfo} />
		</>
	);
};

export default ListUsersPage;
