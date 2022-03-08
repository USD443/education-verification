import Header from "./Header";
import Footer from "./Footer";
import { CssBaseline, Container, Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <CssBaseline>
      <Box height={"100vh"} display={"grid"} gridTemplateRows={"auto 1fr auto"}>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </Box>
    </CssBaseline>
  );
};

export default Layout;
