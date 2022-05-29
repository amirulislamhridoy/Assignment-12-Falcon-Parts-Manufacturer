import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase_init";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  const [admin] = useAdmin(user);
  // console.log(admin);
  return (
    <div className="">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* type your content */}
          <label
            for="my-drawer-2"
            class=" btn btn-primary btn-sm drawer-button lg:hidden ml-8"
          >
            Open Side Menu
          </label>

          <h2 className="text-5xl text-red-800 ml-8">Dashboard</h2>

          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {admin ? (
              <>
                <li>
                  <Link to="/dashboard/makeAdmin">Make Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/addAProduct">Add A Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProducts">Manage Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageAddOrders">Manage All Orders</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/myOrders">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addAReview">Add A Review</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
