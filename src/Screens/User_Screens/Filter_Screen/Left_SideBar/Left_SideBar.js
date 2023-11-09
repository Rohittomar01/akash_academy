import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { FormControlLabel, Checkbox } from "@mui/material";

export default function Left_SideBar() {
  return (
    <Box sx={{ width: "100%", maxWidth: 350,height:'120vh',overflow:'scroll' }}>
      <Box>
        <Typography variant="h5" style={{marginLeft:'5%',fontWeight:'bold'}}>
          Filter
        </Typography>
      </Box>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <Typography variant="body1" style={{fontFamily:'poppins',fontSize:19}}>Grade Level</Typography>
          </ListItem>
        </List>
      </nav>

      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem className="responsive-item">
            <FormControlLabel
          
              control={<Checkbox defaultChecked />}
              label={
                <Typography style={{fontFamily:'poppins'}}>Label</Typography>
              }
            />
          </ListItem>
          <ListItem className="responsive-item">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <Typography style={{fontFamily:'poppins'}}>Label</Typography>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <Typography variant="body1"style={{fontFamily:'poppins',fontSize:19}}>Type Of Math</Typography>
          </ListItem>
        </List>
      </nav>

      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem className="responsive-item">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <Typography style={{fontFamily:'poppins'}}>Label</Typography>
              }
            />
          </ListItem>
          <ListItem className="responsive-item">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <Typography style={{fontFamily:'poppins'}}>Label</Typography>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <Typography variant="body1"style={{fontFamily:'poppins',fontSize:19}}>Meeting Location</Typography>
          </ListItem>
          <ListItem className="responsive-item">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <Typography style={{fontFamily:'poppins'}}>Label</Typography>
              }
            />
          </ListItem>
          <ListItem className="responsive-item">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <Typography style={{fontFamily:'poppins'}}>Label</Typography>
              }
            />
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
