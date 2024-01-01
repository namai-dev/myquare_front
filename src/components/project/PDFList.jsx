import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { Description } from "@mui/icons-material";

const PDFList = () => {
  return (
    <List>
      <ListItem>
        <Description sx={{ marginRight: 1 }} />
        <ListItemText primary="PDF 1" />
      </ListItem>
      <ListItem>
        <Description sx={{ marginRight: 1 }} />
        <ListItemText primary="PDF 2" />
      </ListItem>
      {/* Add more PDF items as needed */}
    </List>
  );
};

export default PDFList;
