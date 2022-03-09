import { Box, Container, Typography, Avatar } from "@mui/material";
import Logo from "../usd443logo.png";

const Header = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white" }}>
      <Container sx={{ p: 2 }}>
        <Box display="flex" columnGap={2}>
          <Avatar sx={{ width: 56, height: 56 }} alt="USD443 Logo" src={Logo} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              Records Request Form
            </Typography>
            <Typography>USD443</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
