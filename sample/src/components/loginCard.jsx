import React from "react";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { FaGoogle,FaFacebookF } from 'react-icons/fa';
import "../../src/index.css";
import Logo from "../assets/images/testpic.png";
import front from "../assets/images/logo.png";
const loginCard = () => {
  return (
    <>
      <div className="border-2 rounded-md border-sky-500 shadow-2xl shadow-sky-500 h-auto w-auto justify-between items-center space-x-0 flex flex-col sm:flex-row">
        <label></label>
        <div className="flex flex-col justify-center items-center p-5">
          <div className="p-2">
            <label className="text-xl font-mono flex justify-center items-center">
              <img
                src={Logo}
                alt=""
                className="animate-[spin_20s_linear_infinite] h-80 w-80"
              />
              <img
                src={front}
                alt=""
                className="h-[14rem] w-[14rem] absolute"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5">
          <div className="bg-sky-500 p-2 w-full rounded-t-2xl">
            <label className="font-mono text-2xl"> LOGIN</label>
          </div>
          <div className="border border-sky-500 p-4 rounded-b-2xl ">
            <div className="relative flex items-center p-2">
              <label className="pr-2 font-mono">Username</label>
              <UserIcon className="h-6 w-6 text-slate-300 absolute left-24 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                className="form-input rounded-full bg-transparent pl-9 w-60 focus:border-sky-500 font-mono hover:border-sky-500"
                placeholder="Username"
              />
            </div>
            <div className="relative flex items-center p-2">
              <label className="pr-4 font-mono">Password</label>
              <LockClosedIcon className="h-6 w-6 text-slate-300 absolute left-24 ml-2 top-1/2 transform -translate-y-1/2" />
              <input
                type="password"
                className="form-input rounded-full bg-transparent pl-9 w-60  focus:border-sky-500 hover:border-sky-500"
                placeholder="Password"
              />
            </div><div className="justify-center items-center">
              <input type="checkbox" className="form-checkbox px-2 rounded-md text-sky-500" />
              <label className="font-mono ml-2">Remember me</label>
            </div>
            <div className="p-2">
              <button type="submit" className="bg-sky-500 hover:bg-sky-700 w-36 rounded-full font-mono text-[16px]">
                Login
              </button>
            </div>
            <a className="font-mono hover:underline hover:text-sky-500"> Forgot Password?</a>
            <div className=" flex justify-center items-center py-3">
              <FaFacebookF className="text-white h-6 w-6 mx-3 hover:text-sky-500"/>
              <FaGoogle className="text-white h-6 w-6 mx-3 hover:text-sky-500"/>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-32 border-t border-white"></div>
              <span className="px-4 font-mono">OR</span>
              <div className="w-32 border-t border-white"></div>
            </div>
            <div>
              <label className="font-mono text-xs">Don't have an Account? </label>
              <a className="font-mono text-xs hover:text-sky-500 hover:underline">Register Here! </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loginCard;
