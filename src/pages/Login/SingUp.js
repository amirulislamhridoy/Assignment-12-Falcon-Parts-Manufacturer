import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from '../../firebase_init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SingUp = () => {
    const { register, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

  const onSubmit = async (data) => {
    // console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password)
    
  };
  return (
    <div className="flex justify-center items-center">
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
        <input className="btn btn-primary" type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SingUp;
