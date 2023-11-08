import { Box } from "@mui/material";
// import Components
import Main_Slider from "./Main_Slider/Main_Slider";
import Nav_Bar from "./Nav_Bar/Nav_Bar";
import About from "./About/About";
import Course from "./Course/Course";
import Services_AreaYou from "./Services_NearYou/Services_AreaYou";
import Experience from "./Experience/Experience";
import Footer from "../User_Components/Footer/Footer";
import Online_Tutors from "./Online_Tutors/Online_Tutors";
import Near_LanguageTutor from "./Near_LanguageTutor/Near_LanguageTutor";
import Test_Prep from "./Test_Prep/Test_Prep";
import For_You from "./For_You/For_You";

export default function Home() {
  return (
    <Box>
      <Box>
        <Nav_Bar elevation={0} paddingTop={'4%'} SearchBar={'none'}/>
      </Box>
      <Box>
        <Main_Slider />
      </Box>
      <Box>
        <About />
      </Box>
      <Box>
        <Course />
      </Box>
      <Box>
        <Services_AreaYou />
      </Box>
      {/* <Box>
        <Online_Tutors />
      </Box> */}
      <Box>
        <Near_LanguageTutor />
      </Box>
      <Box>
        <Test_Prep />
      </Box>
      {/* <Box>
        <Experience />
      </Box> */}
      <Box>
        <For_You />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
