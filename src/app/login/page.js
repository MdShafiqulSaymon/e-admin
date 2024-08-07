"use client"



import React, { useState } from 'react';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden md:w-4/6 md:h-4/6">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center bg-orange-500 text-white p-8 md:w-1/2">
          <img
            src="/shopLogo.jpeg"
            alt="Shopee Logo"
            className="w-32 h-32 mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-center mb-8">
            Manage your shop efficiently on Shopee with our Shopee Seller Centre
          </p>
          <img
            src="/download-removebg-preview.png"
            alt="Welcome Image"
            className="w-96 h-72 mb-4 mt-auto"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 md:w-1/2">
          <div className="w-full max-w-sm shadow-lg p-6 rounded-lg ">
            <h2 className="text-2xl font-bold mb-4 flex justify-center">Log in</h2>
            <p className="text-sm text-gray-600 mb-6 flex justify-center">
              Please fill your information below
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  EMAIL ID
                </label>
                <input
                  type="email"
                  placeholder="example@domain.com"
                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-orange-500"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-orange-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
