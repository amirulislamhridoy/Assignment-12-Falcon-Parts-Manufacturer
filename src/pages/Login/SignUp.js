import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase_init'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { updateProfile } from "firebase/auth";
import axios from "axios";

const SingUp = () => {
  const navigate = useNavigate()
  const location = useLocation()
    const { register, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  const onSubmit = async (data) => {
    const {name, email, password} = data
    
      const axiosData = await axios.put(`http://localhost:5000/user/${email}`, {
      name: name    
    })
      // .then(function (response) {
      //   console.log(response);
      // })
      await createUserWithEmailAndPassword(email, password)
    // await updateProfile({ displayName: name});
  };

  let from = location.state?.from?.pathname || "/";
  if(user || gUser){
    navigate(from, { replace: true });
  }
  if(loading){
    return <div className='text-center'>
    <svg role="status" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>
  </div>
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-sm shadow-2xl bg-base-100 px-8 pb-10 pt-14"
      >
        <label className="label" htmlFor="email">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          {...register("name")}
          placeholder="Name"
        />
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          {...register("email")}
          placeholder="Email"
        />
        <label className="label" htmlFor="email">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          className="input input-bordered"
          {...register("password")}
          placeholder="Password"
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover" alt="">
            Forgot password?
          </a>
        </label>
        <label className="label">
          <Link to="/login" className="label-text-alt link link-hover" alt="">
            Already you have an account.
          </Link>
        </label>
        <br />
        <h3 className='text-red-500 font-bold'>{error?.message}</h3>
        <input className="btn btn-primary" type="submit" value="Sign Up" />
      </form>
      <div className='card w-full max-w-sm shadow-2xl bg-base-100 px-8 pb-4 pt-4 mt-4'>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-warning "
        >
          Google With Login
        </button>
      </div>
    </div>
  );
};

export default SingUp;
