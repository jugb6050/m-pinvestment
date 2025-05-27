// LoginPage.tsx
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <img src="/mnp.svg" alt="M & P Logo" className="w-50 h-60 mr-4" />
          <h1 className="text-2xl font-bold text-gray-800">
            M & P Investments
          </h1>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Login to Your Account
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <Button className="w-full mb-3" onClick={handleLogin}>
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
