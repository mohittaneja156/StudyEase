"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "@/lib/api";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(email, password);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occurred during login");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden text-black">
      {/* Background gradient effects (blue shades only) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute top-[20%] right-[20%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Login card */}
      <div className="max-w-md w-full m-4 relative">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200">
          {/* Logo section */}
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo_sd.png"
                alt="StudyEase Logo"
                width={150}
                height={40}
                style={{ padding: "10px" }}
              />
            </div>
            <h2 className="text-2xl font-bold text-blue-600">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to continue your learning journey
            </p>
          </div>

          {/* Form section */}
          <div className="p-8 pt-0">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div
                  className="bg-red-100 text-red-600 text-sm px-4 py-3 rounded-lg"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-black"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="relative w-full py-2.5 px-4 rounded-lg text-sm font-medium text-white overflow-hidden group"
                >
                  {/* Button gradient background (blue shades) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 transition-transform group-hover:scale-[1.02] duration-200" />

                  {/* Button content */}
                  <span className="relative">Sign in</span>
                </button>
              </div>
            </form>

            {/* Sign up link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
