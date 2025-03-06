import { useState } from "react";

export default function AuthPage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500">
      {/* Main Container */}
      <div className="relative w-[900px] max-w-full min-h-[550px] bg-white bg-opacity-20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
        {/* Sign Up Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full transition-transform duration-700 ease-in-out ${
            isActive ? "translate-x-full opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full p-10 bg-white bg-opacity-40 rounded-2xl shadow-lg backdrop-blur-lg border border-white border-opacity-20">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Join Us</h1>
            <div className="flex space-x-3 my-4">
              {["google", "facebook", "github", "linkedin"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="p-3 border rounded-xl hover:bg-white hover:shadow-md transition-all"
                >
                  <i className={`bx bxl-${icon} text-2xl text-gray-700`}></i>
                </a>
              ))}
            </div>
            <span className="text-sm text-gray-700 mb-4">Register with Email</span>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 my-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 my-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 my-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-lg"
            />
            <button className="w-full bg-purple-500 text-white px-6 py-2 rounded-xl mt-4 hover:bg-purple-600 hover:shadow-xl transition-all transform hover:scale-105">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full transition-transform duration-700 ease-in-out ${
            isActive ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full p-10 bg-white bg-opacity-40 rounded-2xl shadow-lg backdrop-blur-lg border border-white border-opacity-20">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome Back</h1>
            <div className="flex space-x-3 my-4">
              {["google", "facebook", "github", "linkedin"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="p-3 border rounded-xl hover:bg-white hover:shadow-md transition-all"
                >
                  <i className={`bx bxl-${icon} text-2xl text-gray-700`}></i>
                </a>
              ))}
            </div>
            <span className="text-sm text-gray-700 mb-4">Login with Email</span>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 my-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 my-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-lg"
            />
            <a href="#" className="text-sm mt-2 text-purple-500 hover:underline">
              Forgot Password?
            </a>
            <button className="w-full bg-purple-500 text-white px-6 py-2 rounded-xl mt-4 hover:bg-purple-600 hover:shadow-xl transition-all transform hover:scale-105">
              Sign In
            </button>
          </form>
        </div>

        {/* Toggle Panel */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-br from-purple-700 to-indigo-900 text-white flex flex-col items-center justify-center p-10 transition-all duration-700 ease-in-out ${
            isActive ? "translate-x-[-100%]" : "translate-x-0"
          }`}
        >
          <div className={`text-center transition-all duration-700 ease-in-out ${isActive ? "opacity-0" : "opacity-100"}`}>
            <h1 className="text-4xl font-extrabold">Hello, Friend!</h1>
            <p className="mt-2 text-lg">Join us and start your journey today.</p>
            <button
              onClick={() => setIsActive(true)}
              className="mt-6 px-8 py-2 border border-white rounded-xl hover:bg-white hover:text-purple-700 transition-all transform hover:scale-105 shadow-xl"
            >
              Sign In
            </button>
          </div>
          <div className={`text-center transition-all duration-700 ease-in-out ${isActive ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-4xl font-extrabold">Welcome Back!</h1>
            <p className="mt-2 text-lg">Sign in and continue exploring.</p>
            <button
              onClick={() => setIsActive(false)}
              className="mt-6 px-8 py-2 border border-white rounded-xl hover:bg-white hover:text-purple-700 transition-all transform hover:scale-105 shadow-xl"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
