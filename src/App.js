import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SingUp from "./pages/Login/SingUp";
import Footer from "./pages/Shared/Footer";
import Navbar from './pages/Shared/Navbar'

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
