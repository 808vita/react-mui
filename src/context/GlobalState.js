import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
	const [userInfo, setUserInfo] = useState({});

	return (
		<GlobalContext.Provider value={{ userInfo, setUserInfo }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
