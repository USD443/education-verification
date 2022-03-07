import { Box, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", p: 2 }}>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>Records Request Form</Typography>
          <Typography>USD443</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
