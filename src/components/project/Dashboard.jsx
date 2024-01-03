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

import PDFList from "./PDFList";
import VideoList from "./VideoList";
import LinkList from "./LinkList";
import axios from "axios";

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const getData = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const topic = data.get("topic");

    try {
      // Google Custom Search API Key and Engine ID
      const apiKey = "AIzaSyAp3IFkyh-290Pr3rPwh-ApA5fzaG0l6Gw";
      const cx = "f1b66c9165a1a46dd";

      const query = `${topic} links OR pdfs OR videos`;

      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`
      );

      const links = response.data.items.map((item) => item.link);
      const pdfs = links.filter((link) => link.endsWith(".pdf"));
      const videos = links.filter(
        (link) => link.includes("youtube.com") || link.includes("vimeo.com")
      );

      console.log("Links:", links);
      console.log("PDFs:", pdfs);
      console.log("Videos:", videos);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <Container sx={{ padding: 3 }}>
      <Box
        component="form"
        sx={{
          borderBottom: "2px solid grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onSubmit={getData}
      >
        <TextField
          sx={{ padding: 1, flex: 1 }}
          variant="outlined"
          name="topic"
          fullWidth
          placeholder="Search content..."
          InputProps={{
            startAdornment: <Search color="disabled" />,
          }}
        />
        <Button type="submit">Search</Button>
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
