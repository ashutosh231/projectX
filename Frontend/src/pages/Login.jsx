import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-richblack-900 to-richblack-800 p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 shadow-2xl rounded-2xl flex flex-col items-center border border-white/20 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          Login
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-8"></div>
        
        <div className="w-full flex flex-col gap-6">
          <input 
            type="email" 
            placeholder="Enter E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/20 rounded-xl p-4 w-full text-lg text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/30 transition duration-300" 
          />
          <div className="relative w-full">
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Enter Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/20 rounded-xl p-4 w-full text-lg text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/30 transition duration-300" 
            />
            <button 
              type="button" 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-600 transition duration-300" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        <div className="mt-4 text-gray-300 w-full text-right">
          <span className="text-purple-400 cursor-pointer font-semibold hover:underline hover:text-purple-300 transition duration-300">
            Forgot Password?
          </span>
        </div>

        <button 
          className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl text-lg hover:scale-105 transition-transform duration-300 shadow-lg mt-8 hover:shadow-xl"
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="mt-6 text-gray-300 text-center">
          Don't have an account? 
          <span 
            className="text-purple-400 cursor-pointer font-semibold hover:underline hover:text-purple-300 transition duration-300 ml-2" 
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </div>

        <div className="mt-6 flex gap-4">
          {['google', 'facebook', 'github', 'linkedin'].map((icon) => (
            <a 
              key={icon} 
              href="#" 
              className="p-3 border border-gray-300 rounded-full hover:bg-gradient-to-r from-purple-400 to-pink-400 hover:text-white hover:border-transparent transition duration-300"
            >
              <i className={`bx bxl-${icon} text-2xl`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;