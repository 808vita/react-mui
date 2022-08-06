import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProfileCard from "../components/ProfileCard";
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "#fff",
	...theme.typography.body2,
	padding: theme.spacing(8),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function BasicGrid({ usersInfo }) {
	return (
		<Item>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					{usersInfo &&
						usersInfo.map((userInfo) => {
							return <ProfileCard key={userInfo.id} userInfo={userInfo} />;
						})}
				</Grid>
			</Box>
		</Item>
	);
}
