import React, { useContext, useEffect } from "react";
import { LoadUsers } from "../resources/LoadData";
import { GlobalContext } from "../context/GlobalState";
import ListUsersLayout from "../layout/ListUsersLayout";

const ListUsersPage = () => {
	const GContext = useContext(GlobalContext);
	const { usersInfo, setUsersInfo, setNotification } = GContext;

	useEffect(() => {
		LoadUsers(setUsersInfo);
		setNotification({ msg: "Listing Users", type: "normal" });
	}, []);

	return (
		<>
			<ListUsersLayout usersInfo={usersInfo} />
		</>
	);
};

export default ListUsersPage;
