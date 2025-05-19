import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../APIs/api";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation to Terms and Conditions page

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const navigator = useNavigate();
  const onSubmit = (data) => {
    registerUser(data, navigator);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-neon-green font-mono">
      <div className="w-full max-w-md bg-black border-2 border-neon-pink rounded-3xl shadow-glow p-8">
        <h2 className="text-4xl font-extrabold text-neon-pink mb-6 text-center">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username Field */}
          <div>
            <label className="block text-sm font-bold text-neon-green mb-1">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              placeholder="Your username"
              className="w-full px-4 py-3 bg-gray-800 text-neon-green border border-neon-pink rounded-lg shadow-glow focus:ring-2 focus:ring-neon-pink focus:outline-none"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold text-neon-green mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Your email"
              className="w-full px-4 py-3 bg-gray-800 text-neon-green border border-neon-pink rounded-lg shadow-glow focus:ring-2 focus:ring-neon-pink focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-bold text-neon-green mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Your password"
              className="w-full px-4 py-3 bg-gray-800 text-neon-green border border-neon-pink rounded-lg shadow-glow focus:ring-2 focus:ring-neon-pink focus:outline-none"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          <p className="text-sm text-neon-green text-center">
            By registering, you agree to our{" "}
            <Link to="/terms" className="text-neon-pink hover:underline">
              Terms and Conditions
            </Link>.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-neon-pink text-black rounded-lg font-bold hover:bg-neon-green hover:text-black transition-transform transform hover:scale-105 shadow-glow"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
