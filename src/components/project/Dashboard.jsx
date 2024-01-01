import React, { useState } from "react";
import { Search, PictureAsPdf, VideoLibrary, Link } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { Description } from "@mui/icons-material";
import PDFList from "./PDFList";
import VideoList from "./VideoList";
import LinkList from "./LinkList";

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <Container sx={{ padding: 3 }}>
      <Box
        sx={{
          borderBottom: "2px solid grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField
          sx={{ padding: 1, flex: 1 }}
          variant="outlined"
          fullWidth
          placeholder="Search content..."
          InputProps={{
            startAdornment: <Search color="disabled" />,
          }}
        />
        <Button>Search</Button>
      </Box>

      <List sx={{ marginTop: 3, display: "flex", flexDirection: "row" }}>
        {/* PDFs */}
        <ListItem button onClick={() => handleSectionClick("pdf")}>
          <PictureAsPdf sx={{ marginRight: 1 }} />
          <ListItemText primary="PDFs" />
        </ListItem>

        {/* Videos */}
        <ListItem button onClick={() => handleSectionClick("video")}>
          <VideoLibrary sx={{ marginRight: 1 }} />
          <ListItemText primary="Videos" />
        </ListItem>

        {/* Links */}
        <ListItem button onClick={() => handleSectionClick("link")}>
          <Link sx={{ marginRight: 1 }} />
          <ListItemText primary="Links" />
        </ListItem>
      </List>

      {/* Render the selected section */}
      {selectedSection === "pdf" && <PDFList />}
      {selectedSection === "video" && <VideoList />}
      {selectedSection === "link" && <LinkList />}
    </Container>
  );
};

export default Dashboard;
