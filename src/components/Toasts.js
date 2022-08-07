import React, { useEffect, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
import { GlobalContext } from "../context/GlobalState";
const Toasts = () => {
	const Gcontext = useContext(GlobalContext);
	const { registerInfo, notification, setNotification } = Gcontext;

	useEffect(() => {
		setNotification({ msg: "Welcome!", type: "normal" });
	}, []);

	useEffect(() => {
		if (notification) {
			console.log(notification);
			console.log(registerInfo);
			notify(notification);
		}
		return;
	}, [notification]);

	const notify = (notification) => {
		if (notification.type === "normal") {
			toast(notification.msg);
			return;
		}

		if (notification.type === "success") {
			toast.success(`🦄 ${notification.msg}`, {
				position: toast.POSITION.TOP_CENTER,
			});
			return;
		}
		if (notification.type === "error") {
			toast.error(notification.msg, {
				position: toast.POSITION.TOP_CENTER,
			});
			return;
		}
	};

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
};

export default Toasts;
