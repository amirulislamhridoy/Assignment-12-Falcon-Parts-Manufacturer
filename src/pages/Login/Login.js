import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase_init";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
  };
  return (
    <div className='flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-sm shadow-2xl bg-base-100 px-8 pb-10 pt-14"
      >
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
          <Link to="/signup" className="label-text-alt link link-hover" alt="">
            Create an account.
          </Link>
        </label>
        <br />
        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
