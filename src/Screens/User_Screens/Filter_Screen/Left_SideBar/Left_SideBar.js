import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { FormControlLabel, Checkbox } from "@mui/material";

export default function Left_SideBar() {
  return (
    <Box sx={{ width: "100%", maxWidth: 350, }}>
    
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText style={{fontWeight:'bold'}} primary="Grade Level" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem>
            <ListItemButton>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton component="a" href="#simple-list">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          {/* type of math */}
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Type Of Math" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem>
            <ListItemButton>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton component="a" href="#simple-list">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          {/* meeting Location */}
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Meeting Location" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
  
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem >
            <ListItemButton>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton component="a" href="#simple-list">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
