import { Box } from "@mui/material";
// import Components
import Main_Slider from "../User_Components/Main_Slider/Main_Slider";
import Nav_Bar from "../User_Components/Nav_Bar/Nav_Bar";
import About from "../User_Components/About/About";
import Course from "../User_Components/Course/Course";


export default function Home() {
  return (
    <Box>
      <Box>
        <Nav_Bar />
      </Box>
      <Box>
        <Main_Slider />
      </Box>
      <Box>
        <About />
      </Box>
      <Box>
        <Course/>
      </Box>
    </Box>
  );
}
