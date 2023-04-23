import React from"react";
import  Home  from "./pages/home";
import Footer from "./component/fotter";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Nav } from "./component/Nav";
import Fetchdata from "./component/fetchdata";
const App = () => {
  return (
  <>
  <Router>
    <Nav/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/general" element={<Fetchdata cat="general" />}/>
      <Route  path="/business" element={<Fetchdata cat="business"/>}/>
      <Route  path="/entertainment" element={<Fetchdata cat="entertainment"/>}/>
      <Route  path="/health" element={<Fetchdata cat="health"/>}/>
      <Route  path="/science" element={<Fetchdata cat="science"/>}/>
      <Route  path="/sports" element={<Fetchdata cat="sports"/>}/>
      <Route  path="/technology" element={<Fetchdata cat="technology"/>}/>
      </Routes>
      < Footer/>
    </Router>
  </>
  );
};
export default App;


 