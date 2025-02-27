import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Booking from './Components/Booking';
import Menu from './Components/Menu';
import Service from './Components/Service';
import Team from './Components/Team';
import Testimonial from './Components/Testimonial';
Navbar
Footer
Home
About
Contact
Booking
Menu
Service
Team
Testimonial


function App() {
  return (
     <BrowserRouter>
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/a" element={<About/>} />
      <Route path="/b" element={<Booking/>} />
      <Route path="/c" element={<Contact/>} />
      <Route path="/m" element={<Menu/>} />
      <Route path="/s" element={<Service/>} />
      <Route path="/t" element={<Team/>} />
      <Route path="/te" element={<Testimonial/>} />
     </Routes>
     <Footer/>

    </div>
     </BrowserRouter>
  );
}

export default App;
