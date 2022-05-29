import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../images/logo/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase_init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
// console.log(user)
  const handleSignOut = () => {
    signOut(auth)
    navigate('/login')
  }

    const menu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
  
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/myPortfolio">My Portfolio</Link></li>
        
        {user ? 
        <li><a onClick={handleSignOut} className='btn btn-outline btn-error'>Sign Out</a></li>
        :
        <li><Link className='btn btn-outline btn-info' to="/login">Login</Link></li>
        }
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {menu}
            </li>
          </ul>
        </div>
        <Link to="" className="btn btn-ghost normal-case text-xl">
            <img width="100" src={logo} alt='' />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
