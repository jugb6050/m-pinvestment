"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email === "kieronali0095@gmail.com" && password === "Monday01!") {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 w-full max-w-md">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-6 text-center sm:text-left">
          <img
            src="/mnp.svg"
            alt="M & P Logo"
            className="w-28 sm:w-40 h-auto mb-4 sm:mb-0 sm:mr-4"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            M & P Investments
          </h1>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
          Login to Your Account
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <Button className="w-full mb-3 text-sm" onClick={handleLogin}>
          Login
        </Button>

        <div className="text-center">
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
