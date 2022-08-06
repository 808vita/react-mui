import React from "react";
import RegisterForm from "../components/RegisterForm";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "#fff",
	...theme.typography.body2,
	padding: theme.spacing(8),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));
const RegisterUserLayout = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="80vh"
		>
			<Item>
				<Grid item sm={6}>
					<RegisterForm />
				</Grid>
			</Item>
		</Box>
	);
};

export default RegisterUserLayout;
