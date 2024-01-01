import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "@mui/icons-material";

const LinkList = () => {
  return (
    <List>
      <ListItem>
        <Link sx={{ marginRight: 1 }} />
        <ListItemText primary="Link 1" />
      </ListItem>
      <ListItem>
        <Link sx={{ marginRight: 1 }} />
        <ListItemText primary="Link 2" />
      </ListItem>
      {/* Add more link items as needed */}
    </List>
  );
};

export default LinkList;
