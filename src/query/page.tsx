// pages/register.tsx
"use client";

import { QueryRegister } from "@/api/queryApi";

import { useState } from "react";
// import { Link } from "react-router-dom";

const QueryPage = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [moblie, setMoblie] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleQuery = async () => {
    if (!fullName || !email || !moblie || !city) {
      console.log("Please fill in all fields");
      console.log("null");
    } else {
      try {
        const data = await QueryRegister({
          full_name: fullName,
          email: email,
          mobile: moblie,
          your_city: city,
        });

        console.log(data);

        console.log("User registered successfully:", data);
        // You can redirect to another page or perform other actions on successful registration
      } catch (error: any) {
        console.error("Error in registration:", error.message);
        // Handle error, e.g., display an error message to the user
      }
    }
  };
  
  if (!fullName || !email || !moblie || !city) {
    return <p>Loading...</p>;

    // Convert binary image data to base64 string
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8  bg-white rounded shadow-lg">
        <div className="text-xl font-extrabold text-start text-white p-4 bg-violet-700 rounded">
          Query
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
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              type="tel"
              autoComplete="tel"
              required
              value={moblie}
              onChange={(e) => setMoblie(e.target.value)}
              className="mt-1 p-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              id="city"
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 p-2 w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <button
              type="button"
              onClick={handleQuery}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sumbit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QueryPage;
