import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
	const [usersInfo, setUsersInfo] = useState([]);

	return (
		<GlobalContext.Provider value={{ usersInfo, setUsersInfo }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
