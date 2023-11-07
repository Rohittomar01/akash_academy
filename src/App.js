import "./App.css";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Screens/User_Screens/Home/Home'

function App() {
  return (
   <Router>
    <Routes>
      <Route Component={Home} path='Home'></Route>
    </Routes>
   </Router>
  )
}

export default App;
