import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { RegisterUser } from "../resources/LoadData";
import Box from "@mui/material/Box";
const validationSchema = yup.object({
	email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	password: yup
		.string("Enter your password")
		.min(4, "Password should be of minimum 8 characters length")
		.required("Password is required"),
});

const RegisterForm = () => {
	const Gcontext = useContext(GlobalContext);
	const { setRegisterInfo, setNotification } = Gcontext;
	const registerHandler = (data) => {
		RegisterUser(data, setRegisterInfo, setNotification);
	};
	const formik = useFormik({
		initialValues: {
			email: "eve.holt@reqres.in",
			password: "pistol",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(values);
			registerHandler(values);
		},
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					minWidth="70vw"
				>
					<TextField
						fullWidth
						id="email"
						name="email"
						label="Email"
						value={formik.values.email}
						onChange={formik.handleChange}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
						sx={{ m: 2 }}
					/>
					<TextField
						fullWidth
						id="password"
						name="password"
						label="Password"
						type="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
						sx={{ m: 2 }}
					/>
					<Button
						color="primary"
						variant="contained"
						fullWidth
						type="submit"
						sx={{ m: 2 }}
					>
						Register
					</Button>
				</Box>
			</form>
		</div>
	);
};

export default RegisterForm;
