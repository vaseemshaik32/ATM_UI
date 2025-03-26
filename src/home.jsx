import React from "react";
import { useForm } from "react-hook-form";
import { getuserlocation } from "./methods";
import { loginUser } from "./api";
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const navigator= useNavigate()
  const onLoginSubmit = (data) => {
    getuserlocation().then(
      (Response)=>{
        const loginPayload = { ...data, ...Response };
        loginUser(loginPayload,navigator)
      }
    ).catch(()=>{console.log('the location api fucked up')})
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center text-gray-300">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Section: App Description */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-600">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-4">
                Welcome to <span className="text-blue-500">Chicken Fish</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                Hey, I tried to solve a real world problem with this app. We all have been in the long ATM lines. Be it for deposition or withdrawl of cash. The core idea of this app is around
                the question, 'what if I match the guys that want to deposite cash with the guys that want to withdraw cash?' Have Fun
              </p>
              <a
                href="#learn-more"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Section: Login and Register */}
          <div className="w-full lg:w-1/3 bg-gray-800 shadow-2xl rounded-3xl p-6 border border-gray-600">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Get Started
            </h2>

            {/* Login Form */}
            <p className="text-sm text-red-400 mb-4">
              Please enable location on your device for accurate results.
            </p>
            <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-4">
              {/* Email Field */}
              <div>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <input
                  type="password"
                  {...register("password", { required: "Password is required" })}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                Login
              </button>
            </form>

            {/* Register Button */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">New here?</p>
              <button
                className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-transform transform hover:scale-105"
                onClick={() => navigator('/register')}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
