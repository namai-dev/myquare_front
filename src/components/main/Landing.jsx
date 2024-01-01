import { Box, Typography, Container, Button } from "@mui/material";
import Image1 from "./back1.avif";

const Landing = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          padding: 4,
          alignItems: "center",
          justifyContent: "space-between", // Adjusted to space between items
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: "60%" } }}>
          <Typography variant="h6" paragraph>
            Are you ready to revolutionize your study routine? Introducing
            mySquare, the all-in-one app designed to enhance your learning
            journey. Whether you're a student, a professional, or a lifelong
            learner, mySquare is here to empower you with a wealth of
            educational resources.
          </Typography>
          <Box>
            <Button variant="contained">GetStarted</Button>
          </Box>
        </Box>
        <Box sx={{ maxWidth: { xs: "100%", md: "40%" } }}>
          <Box
            component="img"
            alt="mySquare App"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 4,
              display: { xs: "none", sm: "block" },
            }}
            src={Image1}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
