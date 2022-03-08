import Layout from "./components/Layout";
import { Typography, Box, TextField, Stack, Button } from "@mui/material";

const App = () => {
  return (
    <Layout>
      <Box sx={{ py: 4 }}>
        <Typography>Please fill out all the required information</Typography>
        <Stack marginTop={2} component={"form"} spacing={2}>
          <TextField id="fName" required label="First Name" />
          <TextField id="lName" required label="Last Name" />
          <TextField id="mName" label="Middle Name" />
          <TextField id="maidName" label="Maiden Name (If Applicable)" />
          <TextField
            id="dob"
            label="Date of Birth"
            type={"date"}
            required
            InputLabelProps={{ shrink: true }}
          />
          <Button type="submit" color="info" sx={{ p: 2 }} variant="contained">
            Next Step
          </Button>
        </Stack>
      </Box>
    </Layout>
  );
};

export default App;
