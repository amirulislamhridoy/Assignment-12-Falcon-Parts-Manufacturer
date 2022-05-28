import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Footer from "./pages/Shared/Footer";
import Navbar from './pages/Shared/Navbar'
import SignUp from './pages/Login/SignUp'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './RequireAuth/RequireAuth'
import Purchase from "./pages/Purchase/Purchase";
import Dashboard from "./Dashboard/Dashboard";
import MyProfile from './Dashboard/MyProfile'
import MyOrders from "./Dashboard/MyOrders";
import AddAReview from "./Dashboard/AddAReview";
import ManageAllOrders from "./Dashboard/ManageAllOrders";
import AddAProduct from "./Dashboard/AddAProduct";
import MakeAdmin from "./Dashboard/MakeAdmin";
import ManageProducts from "./Dashboard/ManageProducts";


function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile />} />
          <Route path='myOrders' element={<MyOrders />} />
          <Route path='addAReview' element={<AddAReview />} />

          <Route path='manageAddOrders' element={<ManageAllOrders />} />
          <Route path='addAProduct' element={<AddAProduct />} />
          <Route path='makeAdmin' element={<MakeAdmin />} />
          <Route path='manageProducts' element={<ManageProducts />} />
        </Route>

        <Route path="/purchase/:id" element={<RequireAuth>
            <Purchase></Purchase>
        </RequireAuth>} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
