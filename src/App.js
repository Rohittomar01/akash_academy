import "./App.css";
// import media query
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Screens
import Home from './Screens/User_Screens/Home/Home';
import Filter from "./Screens/User_Screens/Filter_Screen/Filter";
import SeeAllServices_NearYou from "./Screens/User_Screens/SeeAllServices_NearYou/SeeAllServices_NearYou";
import TutorProfile from "./Screens/User_Screens/TutorProfile/TutorProfile";



function App() {

  // const theme = useTheme();
  // const sm = useMediaQuery(theme.breakpoints.down("sm"));
  // const md = useMediaQuery(theme.breakpoints.up("md"));
  // const lg = useMediaQuery(theme.breakpoints.up("lg"));
  // const xl = useMediaQuery(theme.breakpoints.up("xl"));


  return (
   <Router>
    <Routes>
      <Route Component={Home} path='/Home'></Route>
      <Route Component={Filter} path='Filter'></Route>
      <Route Component={SeeAllServices_NearYou} path='/SeeAllServices_NearYou'></Route>
      <Route Component={TutorProfile} path='/TutorProfile'></Route>

    </Routes>
   </Router>
  )
}

export default App;
