import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Feedback from './Components/Feedback';
import Track from './Components/Track';
import Packages from './Components/Packages';
import Footer from './Components/Footer';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/a' element={<About/>}/>
      <Route path='/f' element={<Feedback/>}/>
      <Route path='/t' element={<Track/>}/>
      <Route path='/p' element={<Packages/>}/>
     </Routes>
    <Footer/>

    </div>
    </BrowserRouter>
  );
}

export default App;
