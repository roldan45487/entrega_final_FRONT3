import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Details from "./Routes/Details";



function App() {
  return (
      <div className="App">
          <Navbar/>
       <Routes> 
       <Route path="/" element={<Home/>}> </Route>
       <Route path="/contact" element= {<Contact/>}></Route>
       <Route path="/dentist/:id" element={<Details/>}> </Route>
       <Route path="/favs" element={<Favs/>}> </Route>
         </Routes>
          <Footer/>
      </div>
  );
}

export default App;

