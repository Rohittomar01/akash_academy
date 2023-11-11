import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Icons
import BadgeIcon from "@mui/icons-material/Badge";
import ReviewsIcon from "@mui/icons-material/Reviews";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
// import components
import Person_Details from "./Personal_Details";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "white", width: 700 }}>
      <AppBar
        position="static"
        style={{
          background: "white",
          color: "#000",
          boxShadow: "0px 10px 10px var(--cream)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="#000"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab icon={<BadgeIcon style={{color:'green'}}/>} label="Personal Details" {...a11yProps(0)} />
          <Tab icon={<ContactPhoneIcon style={{color:'green'}}/>} label="Request" {...a11yProps(1)} />
          <Tab icon={<NotificationsActiveIcon style={{color:'green'}}/>} label="Notification" {...a11yProps(2)} />
          <Tab icon={<ReviewsIcon style={{color:'green'}}/>} label=" My Reviews" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Person_Details/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          My Review
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
