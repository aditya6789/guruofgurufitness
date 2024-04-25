// pages/register.tsx
"use client";

import { useAuth } from "@/utils/AuthProvider";

import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const { register } = useAuth();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register(fullName, email, password, confirmPassword);
      navigate("/auth/login");

      console.log("User Registered successfully");

      // You can redirect to another page or perform other actions on successful registration
    } catch (error: any) {
      console.error("Error in register:", error.message);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8  bg-white rounded shadow-lg">
        <div className="text-xl font-extrabold text-start text-white p-4 bg-violet-700 rounded">
          Register
        </div>
        <form className="space-y-4 p-8">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 p-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          {/* <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              type="tel"
              autoComplete="tel"
              required
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="mt-1 p-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div> */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleRegister}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
            <p className="mt-5">
              Already have Account?
              <Link to={"/auth/login"}>
                {" "}
                <span className="text-blue-700">SignIn </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
