import { useState } from "react";
import Layout from "./components/Layout";
import {
  Typography,
  Box,
  TextField,
  Stack,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const App = () => {
  const [st, setSt] = useState("");

  const handleStChange = (event) => {
    setSt(event.target.value);
  };

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
          <TextField id="address" label="Address" />
          <TextField id="city" label="City" />
          <FormControl>
            <InputLabel id="state-id">State</InputLabel>
            <Select
              id="state-select"
              labelId="state-id"
              label="State"
              value={st}
              onChange={handleStChange}
            >
              <MenuItem value="alabama">AL</MenuItem>
              <MenuItem value="alaska">AK</MenuItem>
              <MenuItem value="arizona">AZ</MenuItem>
              <MenuItem value="arkansas">AR</MenuItem>
              <MenuItem value="california">CA</MenuItem>
              <MenuItem value="colorado">CO</MenuItem>
              <MenuItem value="connecticut">CT</MenuItem>
              <MenuItem value="delaware">DE</MenuItem>
              <MenuItem value="district of columbia">DC</MenuItem>
              <MenuItem value="florida">FL</MenuItem>
              <MenuItem value="georgia">GA</MenuItem>
              <MenuItem value="hawaii">HI</MenuItem>
              <MenuItem value="idaho">ID</MenuItem>
              <MenuItem value="illinois">IL</MenuItem>
              <MenuItem value="indiana">ID</MenuItem>
              <MenuItem value="iowa">IA</MenuItem>
              <MenuItem value="kansas">KS</MenuItem>
              <MenuItem value="kentucky">KY</MenuItem>
              <MenuItem value="louisiana">LA</MenuItem>
              <MenuItem value="maine">ME</MenuItem>
              <MenuItem value="maryland">MD</MenuItem>
              <MenuItem value="massachusetts">MA</MenuItem>
              <MenuItem value="michigan">MI</MenuItem>
              <MenuItem value="minnesota">MN</MenuItem>
              <MenuItem value="mississippi">MS</MenuItem>
              <MenuItem value="missouri">MO</MenuItem>
              <MenuItem value="montana">MT</MenuItem>
              <MenuItem value="nebraska">NE</MenuItem>
              <MenuItem value="nevada">NV</MenuItem>
              <MenuItem value="new hampshire">NH</MenuItem>
              <MenuItem value="new jersey">NJ</MenuItem>
              <MenuItem value="new mexico">NM</MenuItem>
              <MenuItem value="new york">NY</MenuItem>
              <MenuItem value="north carolina">NC</MenuItem>
              <MenuItem value="north dakota">ND</MenuItem>
              <MenuItem value="ohio">OH</MenuItem>
              <MenuItem value="oklahoma">OK</MenuItem>
              <MenuItem value="oregon">OR</MenuItem>
              <MenuItem value="pennsylvania">PA</MenuItem>
              <MenuItem value="puerto rico">PR</MenuItem>
              <MenuItem value="rhode island">RI</MenuItem>
              <MenuItem value="south carolina">SC</MenuItem>
              <MenuItem value="south dakota">SD</MenuItem>
              <MenuItem value="tennessee">TN</MenuItem>
              <MenuItem value="texas">TX</MenuItem>
              <MenuItem value="utah">UT</MenuItem>
              <MenuItem value="vermont">VT</MenuItem>
              <MenuItem value="virginia">VA</MenuItem>
              <MenuItem value="washington">WA</MenuItem>
              <MenuItem value="west virginia">WV</MenuItem>
              <MenuItem value="wisconsin">WI</MenuItem>
              <MenuItem value="wyoming">WY</MenuItem>
            </Select>
          </FormControl>
          <TextField id="endYear" label="Last Year Attending or Graduation Year" />
          <Button type="submit" color="secondary" sx={{ p: 2 }} variant="contained">
            Next
            <ChevronRightIcon />
          </Button>
        </Stack>
      </Box>
    </Layout>
  );
};

export default App;
