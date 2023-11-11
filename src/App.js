import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Screens
import Home from "./Screens/User_Screens/Home/Home";
import Filter from "./Screens/User_Screens/Filter_Screen/Filter";
import SeeAllServices_NearYou from "./Screens/User_Screens/SeeAllServices_NearYou/SeeAllServices_NearYou";
import TutorProfile from "./Screens/User_Screens/TutorProfile/TutorProfile";
import { DataProvider } from "./Context/Context";
import SearchBar from "./Screens/User_Screens/Home/Nav_Bar/SearchBar/SearchBar";
// import Student_SignIn from "./Screens/User_Screens/Student_SignIn/Student_SignIp";
import user_Account from "./Screens/User_Screens/user_Account/user_Account";
import user_ProfileCard from "./Screens/User_Screens/user_Account/Components/Left_Side";


function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route Component={Home} path="/Home"></Route>
            <Route Component={Filter} path="/Filter"></Route>
            <Route
              Component={SeeAllServices_NearYou}
              path="/SeeAllServices_NearYou"
            ></Route>
            <Route Component={TutorProfile} path="/TutorProfile"></Route>
            {/* <Route Component={Student_SignIn} path='/Student_SignIn'></Route> */}
            <Route Component={TutorProfile} path="/TutorProfile"></Route>
            <Route Component={user_Account} path="/user_Account"></Route>

          </Routes>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
