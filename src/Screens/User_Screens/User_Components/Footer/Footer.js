import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
// import Style
import { FooterStyle } from "./FooterCSS";
// import media query
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Footer() {


  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));


    const classes=FooterStyle()

  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: (theme) =>
        //   theme.palette.mode === "light"
        //     ? theme.palette.grey[200]
        //     : theme.palette.grey[800],
        // p: 6,
        background:
          "linear-gradient(63deg, rgba(17,95,30,0.9389880952380952) 34%, rgba(4,151,21,0.7148984593837535) 72%)",
          height:sm?"":'50vh',
          marginTop:'10%'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" style={{fontFamily:'poppins'}} className={classes.h6} gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" style={{color:'#fff',fontFamily:'poppins'}}>
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5"style={{fontFamily:'poppins'}} className={classes.h6} gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" style={{fontFamily:'poppins'}}className={classes.body2}>
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body1"style={{fontFamily:'poppins'}} className={classes.body2}>
              Email: info@example.com
            </Typography>
            <Typography variant="body1"style={{fontFamily:'poppins'}} className={classes.body2}>
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" style={{fontFamily:'poppins'}} className={classes.h6} gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/"style={{color:'#fff',Size:20}} className={classes.link}>
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              className={classes.link}
              style={{color:'#fff',Size:20,paddingLeft:'3%'}}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/"style={{color:'#fff',Size:20,paddingLeft:'3%'}} className={classes.link}>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={12}>
          <Typography variant="body1" style={{color:'#fff',Size:20,fontFamily:'poppins'}} color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="#fff" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
