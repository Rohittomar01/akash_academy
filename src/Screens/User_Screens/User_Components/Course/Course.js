import { Box, Typography } from "@mui/material";
import Card from "./Card/Card";

export default function Course() {
  return (
    <Box>
      <Box>
        <Box style={{display:'flex',justifyContent:'center'}}>
          <Typography variant="h3" style={{marginLeft:"2%",color:'green',fontFamily:'poppins'}}>Courses</Typography>
        </Box>
        <Box>
          <Card />
        </Box>
      </Box>
    </Box>
  );
}
