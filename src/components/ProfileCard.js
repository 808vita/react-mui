import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

export default function ImgMediaCard({ userInfo }) {
	return (
		<Grid item sm={4}>
			<Card sx={{ maxWidth: 300 }}>
				<CardMedia
					component="img"
					alt={`${userInfo.first_name} ${userInfo.last_name}`}
					height="100"
					image={userInfo.avatar}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{`${userInfo.first_name} ${userInfo.last_name}`}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Email: {userInfo.email}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}
