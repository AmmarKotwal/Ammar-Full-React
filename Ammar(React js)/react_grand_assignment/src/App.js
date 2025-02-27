import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.min.css"
import Statework from './Components/Statework';
import MoreState from './Components/MoreState';
import TempCon from './Components/TempCon';
import BMI_Calculator from './Components/BMI_Calculator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Get_ValueFromInputField from './Components/Get_ValueFromInputField';
import Bills from './Components/Bills';
import RadioAndOptions from './Components/RadioAndOptions';
import Pizza from './Components/Pizza';
import Quiz from './Components/Quiz';
import Array from './Components/Array';
import Job_array from './Components/Job_array';
import Product from './Components/Product';
import Use_Nav from './Components/Use_Nav';
import Mock from './Components/Mock';
import Stu_desc from './Components/Stu_desc';
import Test from './Components/Test';
import Karachi from './Components/Karachi';
import Islamabad from './Components/Islamabad';
import Lahore from './Components/Lahore';
import ToDoList from './Components/ToDoList';
import Word_Count from './Components/Word_Count';
import Feedback from './Components/Feedback';
import Planet from './Components/Planet';
import Read from './Components/Read';
import Update from './Components/Update';
import Delete from './Components/Delete';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Mock />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
        {/* <Route path="/w" element={<Statework />} />
        <Route path="/state" element={<Statework />} />
        <Route path="/m" element={<MoreState />} />
        <Route path="/t" element={<TempCon />} />
        <Route path="/b" element={<BMI_Calculator />} />
        <Route path="/g" element={<Get_ValueFromInputField />} /> */}
        {/* <Route path="/e" element={<Bills />} /> */}
        {/* <Route path="/r" element={<RadioAndOptions />} />
        <Route path="/p" element={<Pizza />} /> */}
        {/* <Route path="/q" element={<Quiz />} />  */}
        {/* <Route path="/a" element={<Array />} />
        <Route path="/j" element={<Job_array />} />
        <Route path="/u" element={<Use_Nav />} />
        <Route path="/pro" element={<Product />} />
        <Route path="/sd/:get_url" element={<Stu_desc />} />
        <Route path="/test" element={<Test />} />
        <Route path="/kar" element={<Karachi />} />
        <Route path="/isl" element={<Islamabad />} />
        <Route path="/lah" element={<Lahore />} /> */}
        {/* <Route path="/todo" element={<ToDoList />} />
        <Route path="/word" element={<Word_Count />} />
        <Route path="/f" element={<Feedback />} />
        <Route path="/planet" element={<Planet />} /> */}





      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
