import React from "react";
import { useForm } from "react-hook-form";
import { getuserlocation } from "./methods";
import { loginUser } from "./api";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigator = useNavigate();
  const onLoginSubmit = (data) => {
    getuserlocation()
      .then((Response) => {
        const loginPayload = { ...data, ...Response };
        loginUser(loginPayload, navigator);
      })
      .catch(() => {
        console.log("The location API failed");
      });
  };

  return (
    <div className="min-h-screen bg-black text-neon-green flex items-center justify-center font-mono">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Section: App Description */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="bg-black border-2 border-neon-pink rounded-3xl shadow-glow p-8 lg:p-10">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-neon-green mb-6">
                Welcome to{" "}
                <span className="text-neon-pink">Chicken Fish</span>
              </h1>
              <p className="text-lg text-neon-green opacity-80 leading-relaxed mb-6">
                A revolutionary way to exchange cash and digital currency with
                ease.
              </p>
              <button
                onClick={() => navigator("/readme")}
                className="inline-block px-6 py-3 bg-neon-pink text-black font-bold text-lg rounded-lg shadow-glow hover:bg-neon-green hover:text-black transition-transform transform hover:scale-105"
              >
                User Guide
              </button>
            </div>
          </div>

          {/* Right Section: Login and Register */}
          <div className="w-full lg:w-1/3 bg-gradient-to-br from-black to-gray-900 shadow-glow rounded-3xl p-6 border border-neon-pink">
            <h2 className="text-4xl font-extrabold text-neon-green mb-6">
              Get Started
            </h2>

            {/* Login Form */}
            <p className="text-sm text-neon-pink mb-4">
              Please enable location on your device for accurate results.
            </p>
            <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-4">
              {/* Email Field */}
              <div>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-800 text-neon-green border border-neon-pink rounded-lg focus:ring-2 focus:ring-neon-green focus:outline-none"
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
                  className="w-full px-4 py-3 bg-gray-800 text-neon-green border border-neon-pink rounded-lg focus:ring-2 focus:ring-neon-green focus:outline-none"
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
                className="w-full px-4 py-3 bg-neon-green text-black rounded-lg font-bold hover:bg-neon-pink hover:text-black transition-transform transform hover:scale-105"
              >
                Login
              </button>
            </form>

            {/* Register Button */}
            <div className="mt-6 text-center">
              <p className="text-neon-green opacity-80">New here?</p>
              <button
                className="mt-4 px-6 py-3 bg-neon-pink text-black rounded-lg font-bold hover:bg-neon-green hover:text-black transition-transform transform hover:scale-105"
                onClick={() => navigator("/register")}
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
