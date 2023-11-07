import { Box, Typography } from "@mui/material";
import Card from "./Card/Card";
// import icon
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Services_AreaYou() {
  return (
    <Box>
      <Box>
        <Box style={{display:'flex',justifyContent:'space-between',marginTop:'8%'}}>
          <Typography variant="h4" style={{marginLeft:"5%",color:'green',fontFamily:'poppins',textShadow:'0px 10px 10px var(--cream)'}}>Tutors Services In Your Area</Typography>
          
          <Box component={'div'}style={{display:'flex',flexDirection:'row',width:'11vw',marginTop:'1%'}}>
            <Typography style={{fontFamily:'poopins',fontWeight:'bold',fontSize:17,color:'green',textShadow:'0px 10px 10px var(--cream)'}}>See All</Typography>
            <ChevronRightIcon sx={{color:'green'}}/>
           </Box> 
          
        </Box>
        <Box>
          <Card />
        </Box>
      </Box>
    </Box>
  );
}
