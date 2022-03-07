import Header from "./Header";
import Footer from "./Footer";
import { CssBaseline, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <CssBaseline>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </CssBaseline>
  );
};

export default Layout;
