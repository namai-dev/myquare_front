import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

const VideoList = () => {
  return (
    <List>
      <ListItem>
        <PlayArrow sx={{ marginRight: 1 }} />
        <ListItemText primary="Video 1" />
      </ListItem>
      <ListItem>
        <PlayArrow sx={{ marginRight: 1 }} />
        <ListItemText primary="Video 2" />
      </ListItem>
      {/* Add more video items as needed */}
    </List>
  );
};

export default VideoList;
