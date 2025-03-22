import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    gender: '',
    dob: '',
  });

  useEffect(() => {
    // Fetch user data from API or local storage
    const fetchUserData = async () => {
      // Example: fetching data from an API
      const response = await fetch('/api/getUserData');
      const data = await response.json();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: submitting data to an API
    fetch('/api/updateUserData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User data updated successfully', data);
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-pink-400 p-6">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg p-8 shadow-2xl rounded-2xl flex flex-col gap-6 border border-white/20">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          Profile
        </h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          {/* Full Name Input */}
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="bg-gray-100 rounded-xl p-3 text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition duration-300"
          />
          
          {/* Email Input */}
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="bg-gray-100 rounded-xl p-3 text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition duration-300"
            // readOnly
          />
          
          {/* Phone Number Input */}
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="bg-gray-100 rounded-xl p-3 text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition duration-300"
          />
          
          {/* Location Input */}
          <input
            type="text"
            name="location"
            value={userData.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="bg-gray-100 rounded-xl p-3 text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition duration-300"
          />
          
          {/* Bio Input */}
          <textarea
            name="bio"
            value={userData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="bg-gray-100 rounded-xl p-3 text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition duration-300"
          />
          
          {/* Gender and DOB Inputs */}
          <div className="flex gap-4">
            {/* Gender Input */}
            <input
              type="text"
              name="gender"
              value={userData.gender}
              onChange={handleInputChange}
              placeholder="Gender"
              className="bg-gray-100 rounded-xl p-3 text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition duration-300"
            />
            
            {/* Date of Birth Input */}
            <input
              type="date"
              name="dob"
              value={userData.dob}
              onChange={handleInputChange}
              className="bg-gray-100 rounded-xl p-3 text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition duration-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl p-3 text-lg font-semibold mt-6 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition duration-300"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
