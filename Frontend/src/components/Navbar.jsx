import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [userInitials, setUserInitials] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedImage = localStorage.getItem("profileImage");
    const storedName = localStorage.getItem("userName");
    setIsLoggedIn(!!token);
    setProfileImage(storedImage || "");
    
    if (storedName) {
      const nameParts = storedName.split(" ");
      const initials = nameParts.length > 1 ? nameParts[0][0] + nameParts[1][0] : nameParts[0][0];
      setUserInitials(initials.toUpperCase());
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profileImage");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setProfileDropdownOpen(false);
    window.location.href = "/";
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Accommodation", path: "/accommodation" },
  ];

  const exploreRoutes = {
    Destinations: "/recommend",
    Activities: "/activities",
    Accommodation: "/accommodation",
    TravelTips: "/travel-tips",
  };

  return (
    <nav className="relative flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-lg border-b border-gray-700 z-50">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold uppercase tracking-wide">
          Tour
        </Link>
        <div className="md:hidden" onClick={() => setNavbarState(!navbarState)}>
          {navbarState ? (
            <VscChromeClose className="text-3xl cursor-pointer" />
          ) : (
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className="text-lg hover:text-teal-400 transition duration-300">
              {link.name}
            </Link>
          </li>
        ))}
        <li className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-lg flex items-center hover:text-teal-400 transition duration-300">
            Explore
            <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden animate-fadeIn">
              {Object.keys(exploreRoutes).map((item) => (
                <li key={item}>
                  <Link to={exploreRoutes[item]} className="block px-4 py-2 hover:bg-teal-400 hover:text-white transition duration-300" onClick={() => setDropdownOpen(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>

      <div className="hidden md:flex gap-4">
        <Link to="/booking">
          <button className="px-6 py-2 text-white bg-orange-500 rounded-lg text-lg uppercase hover:shadow-md transition duration-300">
            Book Now
          </button>
        </Link>
        {isLoggedIn ? (
          <div className="relative">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white hover:shadow-md transition duration-300"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              />
            ) : (
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer border-2 border-white bg-gray-500 text-white font-bold text-lg"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              >
                {userInitials}
              </div>
            )}
            {profileDropdownOpen && (
              <ul className="absolute right-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden animate-fadeIn">
                <li>
                  <Link to="/profile" className="block px-4 py-2 hover:bg-purple-400 hover:text-white transition duration-300" onClick={() => setProfileDropdownOpen(false)}>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/my-bookings" className="block px-4 py-2 hover:bg-purple-400 hover:text-white transition duration-300" onClick={() => setProfileDropdownOpen(false)}>
                    My Bookings
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white transition duration-300">
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="px-6 py-2 text-white bg-blue-500 rounded-lg text-lg uppercase hover:shadow-md transition duration-300">
              Login
            </button>
          </Link>
        )}
      </div>
      {navbarState && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 text-white shadow-lg border-b border-gray-700 z-50">
          <ul className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-lg hover:text-teal-400 transition duration-300" onClick={() => setNavbarState(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-lg flex items-center hover:text-teal-400 transition duration-300">
                Explore
                <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 w-full bg-white text-black rounded-md shadow-lg overflow-hidden animate-fadeIn">
                  {Object.keys(exploreRoutes).map((item) => (
                    <li key={item}>
                      <Link to={exploreRoutes[item]} className="block px-4 py-2 hover:bg-teal-400 hover:text-white transition duration-300" onClick={() => setDropdownOpen(false)}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/booking" className="text-lg hover:text-teal-400 transition duration-300" onClick={() => setNavbarState(false)}>
                Book Now
              </Link>
            </li>
            {isLoggedIn ? (
              <div className="relative">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-10 h-10 rounded-full cursor-pointer border-2 border-white hover:shadow-md transition duration-300"
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  />
                ) : (
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer border-2 border-white bg-gray-500 text-white font-bold text-lg"
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  >
                    {userInitials}
                  </div>
                )}
                {profileDropdownOpen && (
                  <ul className="absolute right-0 top-full mt-2 w-full bg-white text-black rounded-md shadow-lg overflow-hidden animate-fadeIn">
                    <li>
                      <Link to="/profile" className="block px-4 py-2 hover:bg-purple-400 hover:text-white transition duration-300" onClick={() => setProfileDropdownOpen(false)}>
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/my-bookings" className="block px-4 py-2 hover:bg-purple-400 hover:text-white transition duration-300" onClick={() => setProfileDropdownOpen(false)}>
                        My Bookings
                      </Link>
                    </li>
                   
import { VscChromeClose } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [userInitials, setUserInitials] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedImage = localStorage.getItem("profileImage");
    const storedName = localStorage.getItem("userName");
    setIsLoggedIn(!!token);
    setProfileImage(storedImage || "");
    
    if (storedName) {
      const nameParts = storedName.split(" ");
      const initials = nameParts.length > 1 ? nameParts[0][0] + nameParts[1][0] : nameParts[0][0];
      setUserInitials(initials.toUpperCase());
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profileImage");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setProfileDropdownOpen(false);
    window.location.href = "/";
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Accommodation", path: "/accommodation" },
  ];

  const exploreRoutes = {
    Destinations: "/recommend",
    Activities: "/activities",
    Accommodation: "/accommodation",
    TravelTips: "/travel-tips",
  };

  return (
    <nav className="relative flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-lg border-b border-gray-700 z-50">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold uppercase tracking-wide">
          Tour
        </Link>
        <div className="md:hidden" onClick={() => setNavbarState(!navbarState)}>
          {navbarState ? (
            <VscChromeClose className="text-3xl cursor-pointer" />
          ) : (
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className="text-lg hover:text-teal-400 transition duration-300">
              {link.name}
            </Link>
          </li>
        ))}
        <li className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-lg flex items-center hover:text-teal-400 transition duration-300">
            Explore
            <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden animate-fadeIn">
              {Object.keys(exploreRoutes).map((item) => (
                <li key={item}>
                  <Link to={exploreRoutes[item]} className="block px-4 py-2 hover:bg-teal-400 hover:text-white transition duration-300" onClick={() => setDropdownOpen(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>

      <div className="hidden md:flex gap-4">
        <Link to="/booking">
          <button className="px-6 py-2 text-white bg-orange-500 rounded-lg text-lg uppercase hover:shadow-md transition duration-300">
            Book Now
          </button>
        </Link>
        {isLoggedIn ? (
          <div className="relative">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white hover:shadow-md transition duration-300"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              />
            ) : (
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer border-2 border-white bg-gray-500 text-white font-bold text-lg"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              >
                {userInitials}
              </div>
            )}
            {profileDropdownOpen && (
              <ul className="absolute right-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden animate-fadeIn">
                <li>
                  <Link to="/profile" className="block px-4 py-2 hover:bg-purple-400 hover:text-white transition duration-300" onClick={() => setProfileDropdownOpen(false)}>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/my-bookings" className="block px-4 py-2 hover:bg-purple-400 hover:text-white transition duration-300" onClick={() => setProfileDropdownOpen(false)}>
                    My Bookings
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white transition duration-300">
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="px-6 py-2 text-white bg-blue-500 rounded-lg text-lg uppercase hover:shadow-md transition duration-300">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
