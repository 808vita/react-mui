import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "#fff",
	...theme.typography.body2,
	padding: theme.spacing(8),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function SimpleContainer({ children }) {
	return (
		<React.Fragment>
			<Item>
				<Container maxWidth="sm">{children}</Container>
			</Item>
		</React.Fragment>
	);
}
