import React from "react";
import LoginForm from "../components/LoginForm";
import loginThumb from "../images/6343825.jpg";

const Login = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center my-5 gap-2 lg:gap-x">
        <div className="w-4/5 lg:w-1/5">
          <div>
            <h1 className="font-bold text-3xl text-[#083047] text-center mb-8">
              Welcome Back
              <span className="text-sm font-normal block">
                Please login to your account
              </span>
            </h1>
          </div>
          <LoginForm></LoginForm>
        </div>
        <div>
          <img
            className="w-[300px] lg:w-[500px] mx-auto"
            src={loginThumb}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;
