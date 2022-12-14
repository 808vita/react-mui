import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
	const [usersInfo, setUsersInfo] = useState([]);
	const [registerInfo, setRegisterInfo] = useState({});
	const [notification, setNotification] = useState({});

	return (
		<GlobalContext.Provider
			value={{
				usersInfo,
				setUsersInfo,
				registerInfo,
				setRegisterInfo,
				notification,
				setNotification,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
