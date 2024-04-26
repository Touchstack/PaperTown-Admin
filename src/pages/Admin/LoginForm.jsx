import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AppLogo from "../../assets/Images/Logo.svg"
import { logInUser } from "../../../services/LoginService";
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState("") 

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(""); // Clear error after 5 seconds
    }, 2000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Clear timeout when component unmounts
  }, [Error]);
  
  const onSubmit = async (data) => {
    setIsLoading(true); // Set loading state to true when submitting form
    try {
      const payLoad = {
        email: data.email,
        password: data.password
      }
      // Make API call to login user
      await logInUser(payLoad).then((res) => {
         console.log(res)
        if (res?.status === 200) {
          navigate('/admin/dashboard')
          localStorage.setItem("data",JSON.stringify(res?.data?.data))
        } else {
          setError(res?.response?.data?.message)
        }
      });
    } catch (error) {
      console.error("Error occurred while logging in:", error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="">
      <a href="/" className="flex items-center">
        <img
          src={AppLogo}
          alt="Logo"
          className="md:h-[80px] lg:w-[88px] sm:h-[70px]  h-[60px] w-[70px] mt-10 mb-10 ml-20"
        />
      </a>

     {Error &&
      <div className={`bg-red-500 flex items-center justify-center w-[200px] h-[30px] transition-opacity duration-500 ease-in-out ${Error ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-[#ffff] font-[700]">{Error}</p>
      </div>
     }
     

      <div className=" bg-white lg:mx-[34%] lg:py-10 lg:px-10 mx-[10%] py-[10px] rounded-[25px]">
        <h1 className="absolute left-[38%] mb-15 lg:text-3xl md:text-2xl text-2xl font-Bold text-[#000] md:text-left">
          Log in
        </h1>
         
        {/* form starts */}
        <form className="mt-10 py-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative w-full flex-col mb-2 group text-sm font-Regular text-[#858585]  flex">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              name="email"
              {...register('email', { required: true })}
              className={`block w-11/12 h-[55px] p-3 lg:mx-0 mx-6 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-blue-300 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <span className="text-red-500 pt-2 ml-6 md:ml-0">Email is required</span>}
          </div>
          <div className="relative w-full flex-col mb-6 group text-sm font-Regular text-[#858585]  flex">
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              {...register('password', { required: true })}
              className={` w-11/12 h-[55px] p-3 lg:mx-0 mx-6 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-blue-300 ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && <span className="text-red-500 pt-2 ml-6 md:ml-0">Password is required</span>}
          </div>
          <a
            href="#"
            className="text-sm font-Regular text-[#942D99] absolute lg:right-[32%] px-20 mb-5  hover:underline"
          >
            Forgot Password?
          </a>

          <div className="flex justify-center items-center mt-4">
            <button
              type="submit"
              className="text-[#FFF] bg-[#DF327B] font-Regular rounded-full mt-10 p-3 md:w-[350px] w-[250px]"
            >
               {isLoading ? (
                <ClipLoader size={24} color="#FFF" /> // Display spinner while loading
              ) : (
                <p className="text-center font-Bold text-md">Log in</p>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
