import { Box, Typography } from "@mui/material";
import Near_L_T_Card from "./Near_L_T_Card";
// import icon
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Near_LanguageTutor() {
  return (
    <Box>
      <Box>
        <Box style={{display:'flex',justifyContent:'space-between'}}>
          <Typography variant="h4" style={{marginLeft:"5%",color:'green',fontFamily:'poppins',textShadow:'0px 10px 10px var(--cream)'}}>Neaby Language Tutors</Typography>
          
          <Box component={'div'}style={{display:'flex',flexDirection:'row',width:'11vw',marginTop:'1%'}}>
            <Typography style={{fontFamily:'poopins',fontWeight:'bold',fontSize:17,color:'green',textShadow:'0px 10px 10px var(--cream)'}}>See All</Typography>
            <ChevronRightIcon sx={{color:'green'}}/>
           </Box> 
          
        </Box>
        <Box>
          <Near_L_T_Card />
        </Box>
      </Box>
    </Box>
  );
}
