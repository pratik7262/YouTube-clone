import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { appCardList, flexColumnCenter, trimText } from "../styles/styles";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";

export const AppCard = ({ url, title, channelTitle, videoId }) => {
  return (
    <Card sx={{ boxShadow: 0 }}>
      <Link href={`https://youtube.com/watch?v=${videoId}`}>
        <CardMedia
          component="img"
          width="426"
          height="240"
          image={url}
          alt={title}
        />
      </Link>
      <CardContent sx={{ m: 0, p: 0 }}>
        <List sx={appCardList}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="channel avtar" src="htts://i.praatar.cc/150?img=1" />
            </ListItemAvatar>
            <Box sx={flexColumnCenter}>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                {trimText(title)}
              </Typography>
            </Box>
            <Box sx={{ dispaly: "flex", alignItems: "center" }}>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ mr: 1, mb: 0, p: 0 }}
              >
                {channelTitle}
              </Typography>
              <AiFillCheckCircle />
            </Box>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
