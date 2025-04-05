import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    gender: "",
    dob: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const cities = [
    "Delhi", "Mumbai", "Kolkata", "Chennai", "Bengaluru", "Hyderabad", "Ahmedabad", "Pune", "Jaipur",
    "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal", "Surat", "Vadodara", "Ludhiana", "Agra",
    "Varanasi", "Prayagraj", "Meerut", "Patna", "Ranchi", "Bhubaneswar", "Guwahati", "Dehradun",
    "Chandigarh", "Amritsar", "Jalandhar", "Faridabad", "Gurgaon", "Noida", "Ghaziabad",
    "Coimbatore", "Madurai", "Visakhapatnam", "Vijayawada", "Thiruvananthapuram", "Kochi",
    "Kozhikode", "Mangaluru", "Mysuru", "Hubballi", "Belagavi", "Nashik", "Aurangabad",
    "Kolhapur", "Solapur", "Udaipur", "Jodhpur", "Kota", "Ajmer", "Bikaner", "Gwalior",
    "Jabalpur", "Raipur", "Bilaspur", "Siliguri", "Durgapur", "Asansol", "Cuttack",
    "Jamshedpur", "Srinagar", "Jammu", "Shimla", "Manali", "Leh", "Panaji", "Margao",
    "Vasco da Gama"
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost/Travel-Planner/backend/get_user_data.php");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        if (!data.name || !data.email) {
          throw new Error("Invalid user data received");
        }
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message || "Unable to fetch user data.");
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));

    if (name === "location") {
      if (value) {
        const filteredSuggestions = cities.filter((city) =>
          city.toLowerCase().startsWith(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    }
  };

  const handleSuggestionClick = (city) => {
    setUserData((prev) => ({ ...prev, location: city }));
    setSuggestions([]);
  };

  const saveDetails = async () => {
    try {
      const response = await fetch("http://localhost/Travel-Planner/backend/update_user.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (!response.ok || data.error) {
        throw new Error(data.error || "Update failed");
      }

      setMessage(data.message || "Details saved successfully");
      setError("");
    } catch (err) {
      setError(err.message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-richblack-900 via-richblack-800 to-richblack-900 p-6">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg p-8 shadow-2xl rounded-2xl flex flex-row gap-6 border border-white/20">
        <div className="w-1/3 flex flex-col items-center">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl font-bold text-white">
            {userData.name ? userData.name[0] : "?"}
          </div>
          <h2 className="text-2xl font-bold text-white mt-4">{userData.name || "User Name"}</h2>
          <p className="text-gray-400">{userData.email || "user@example.com"}</p>
        </div>
        <div className="w-2/3 flex flex-col gap-4">
          {error && <div className="text-red-500 text-center bg-red-100 p-4 rounded-xl">{error}</div>}
          {message && <div className="text-green-500 text-center bg-green-100 p-4 rounded-xl">{message}</div>}
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-300">Name:</span>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 rounded bg-gray-900 text-white"
              />
            </label>
            <label className="block">
              <span className="text-gray-300">Phone:</span>
              <input
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 rounded bg-gray-900 text-white"
              />
            </label>
            <label className="block relative">
              <span className="text-gray-300">Location:</span>
              <input
                type="text"
                name="location"
                value={userData.location}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 rounded bg-gray-900 text-white"
              />
              {suggestions.length > 0 && (
                <ul className="absolute z-10 bg-gray-800 text-white w-full mt-1 rounded shadow-lg">
                  {suggestions.map((city, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(city)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-700"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </label>
            <label className="block">
              <span className="text-gray-300">Gender:</span>
              <select
                name="gender"
                value={userData.gender}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 rounded bg-gray-900 text-white"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-300">Date of Birth:</span>
              <input
                type="date"
                name="dob"
                value={userData.dob}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 rounded bg-gray-900 text-white"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-gray-300">Bio:</span>
            <textarea
              name="bio"
              value={userData.bio}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 rounded bg-gray-900 text-white"
            />
          </label>
          <button
            onClick={saveDetails}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 self-end"
          >
            Save Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;