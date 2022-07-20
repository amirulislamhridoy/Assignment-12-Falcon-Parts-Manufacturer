import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase_init";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleFromSubmit = e => {
      e.preventDefault();
      const name = user.displayName
      const email = user.email
      const education = e.target.education.value
      const location = e.target.location.value
      const linkedin = e.target.linkedin.value
      const gender = e.target.gender.value 
      const phone = e.target.phone.value

    const data = {name, email, phone, education, location, linkedin, gender}
    
    axios.put(`https://falcon-parts-manufatures.herokuapp.com/user?email=${email}`, {name, email, phone, education, location, linkedin, gender} )
    .then(res => {
        console.log(res)
        toast.success('Your profile is update.')
        e.target.reset()
    })
  }

  return (
    <div className='flex flex-col items-center lg:block'>
      <h2 className="text-3xl text-blue-400 ml-8">My Profile</h2>

      <form onSubmit={handleFromSubmit} class="card flex-shrink-0 shadow-2xl w-full max-w-sm bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
              value={user?.displayName}
              disabled
            />
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              class="input input-bordered"
              value={user?.email}
              disabled
            />
            <label class="label" htmlFor="education">
              <span class="label-text">Phone Number</span>
            </label>
            <input
              id="education"
              type="text"
              placeholder="Phone Number"
              class="input input-bordered"
              name="phone"
            />
            <label class="label" htmlFor="education">
              <span class="label-text">Education</span>
            </label>
            <input
              id="education"
              type="text"
              placeholder="Education"
              class="input input-bordered"
              name="education"
            />
            <label class="label" htmlFor="location">
              <span class="label-text">Location</span>
            </label>
            <input
              id="location"
              type="text"
              placeholder="Location"
              class="input input-bordered"
              name="location"
            />
            <label class="label" htmlFor="linkedin">
              <span class="label-text">Linked In Profile Link</span>
            </label>
            <input
            id="linkedin"
              type="url"
              placeholder="Linked In"
              class="input input-bordered"
              name="linkedin"
            />
            <label class="label" htmlFor="gender">
              <span class="label-text">Gender</span>
            </label>
            <select name='gender' id='gender' class="select input-bordered w-full max-w-xs">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
