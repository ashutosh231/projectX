import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSendOtp = async () => {
    setErrorMessage(""); // Clear previous errors
    setSuccessMessage(""); // Clear previous success messages
    try {
      console.log("Sending OTP to:", { email });
      
      const response = await fetch("http://localhost/Travel-Planner/backend/forgot_password.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok || data.status !== 'success') {
        throw new Error(data.message || "Failed to send OTP");
      }
      
      setSuccessMessage("OTP sent to your email. Please check and enter the code below.");
      setShowOtpInput(true);
      
    } catch (error) {
      console.error("Failed to send OTP:", error.message);
      setErrorMessage(error.message);
    }
  };

  const handleVerifyOtp = async () => {
    setErrorMessage(""); // Clear previous errors
    setSuccessMessage(""); // Clear previous success messages
    try {
      console.log("Verifying OTP:", { email, otp });
      
      const response = await fetch("http://localhost/Travel-Planner/backend/verify_otp.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });
      
      const data = await response.json();
      
      if (!response.ok || data.status !== 'success') {
        throw new Error(data.message || "Failed to verify OTP");
      }
      
      setPassword(data.password);
      setSuccessMessage("OTP verified successfully. Here is your password.");
      
    } catch (error) {
      console.error("Failed to verify OTP:", error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-richblack-900 to-richblack-800 p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 shadow-2xl rounded-2xl flex flex-col items-center border border-white/20 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          Forgot Password
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-8"></div>

        {errorMessage && (
          <div className="text-red-500 text-sm font-semibold bg-red-100 p-2 rounded-md w-full text-center mb-4">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="text-green-500 text-sm font-semibold bg-green-100 p-2 rounded-md w-full text-center mb-4">
            {successMessage}
          </div>
        )}

        <div className="w-full flex flex-col gap-6">
          <input
            type="email"
            placeholder="Enter E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/20 rounded-xl p-4 w-full text-lg text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/30 transition duration-300"
          />
          
          {!showOtpInput ? (
            <button
              className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              onClick={handleSendOtp}
            >
              Send OTP
            </button>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="bg-white/20 rounded-xl p-4 w-full text-lg text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/30 transition duration-300"
              />
              
              <button
                className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            </>
          )}
          
          {password && (
            <div className="mt-6">
              <p className="text-gray-300 mb-2">Your password:</p>
              <input
                type="text"
                readOnly
                value={password}
                className="bg-white/20 rounded-xl p-4 w-full text-lg text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/30 transition duration-300"
              />
            </div>
          )}
        </div>

        <div className="mt-6 text-gray-300 text-center">
          Remembered your password?
          <span
            className="text-purple-400 cursor-pointer font-semibold hover:underline hover:text-purple-300 transition duration-300 ml-2"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
