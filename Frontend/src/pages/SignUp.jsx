import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mx-auto mt-20 w-[400px] bg-white p-10 shadow-2xl rounded-lg">
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="text-4xl font-bold text-purple-800">Sign Up</div>
        <div className="w-16 h-1 bg-purple-800 rounded-full"></div>
      </div>
      <div className="mt-8 flex flex-col gap-6 w-full">
        <input 
          type="text" 
          placeholder="Enter Name" 
          className="bg-gray-200 rounded-md p-4 w-full text-lg text-gray-600 outline-none focus:ring-2 focus:ring-purple-600" 
        />
        <input 
          type="email" 
          placeholder="Enter E-mail" 
          className="bg-gray-200 rounded-md p-4 w-full text-lg text-gray-600 outline-none focus:ring-2 focus:ring-purple-600" 
        />
        <input 
          type="password" 
          placeholder="Enter Password" 
          className="bg-gray-200 rounded-md p-4 w-full text-lg text-gray-600 outline-none focus:ring-2 focus:ring-purple-600" 
        />
      </div>
      <div className="mt-8 flex flex-col items-center">
        <button className="w-full h-14 bg-purple-800 text-white font-bold rounded-full text-lg hover:bg-purple-900 transition shadow-md">Sign Up</button>
      </div>
      <div className="mt-6 text-gray-600">
        Already have an account? 
        <span 
          className="text-purple-800 cursor-pointer font-semibold hover:underline" 
          onClick={() => navigate('/login')}
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default SignUp;
