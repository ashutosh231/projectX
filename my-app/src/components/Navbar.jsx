
// import { GiHamburgerMenu } from "react-icons/gi";
// import { VscChromeClose } from "react-icons/vsc";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [navbarState, setNavbarState] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleNavbar = () => setNavbarState(!navbarState);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   // Routes for each dropdown sub-item
//   const exploreRoutes = {
//     Destinations: "/recommend",
//     Activities: "/activities",
//     Accommodation: "/accommodation",
//     TravelTips: "/travel-tips", // You can adjust or remove if not used
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="relative flex justify-between items-center p-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg border-b-2 border-gray-700 z-50">
//         <div className="flex items-center gap-4">
//           <Link
//             to="/"
//             className="cursor-pointer text-2xl font-bold uppercase tracking-wide"
//           >
//             Tour
//           </Link>
//           <div className="md:hidden" onClick={toggleNavbar}>
//             {navbarState ? (
//               <VscChromeClose className="text-3xl cursor-pointer" />
//             ) : (
//               <GiHamburgerMenu className="text-3xl cursor-pointer" />
//             )}
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 items-center relative">
//           {/* Home link now redirects to the homepage */}
//           <li>
//             <Link
//               to="/" // Hardcoded to the homepage
//               className="text-lg hover:text-teal-400 transition duration-300"
//             >
//               Home
//             </Link>
//           </li>
//           {["About", "Accomodation"].map((item) => (
//             <li key={item}>
//               <Link
//                 to={`/accommodation`}
//                 className="text-lg hover:text-teal-400 transition duration-300"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}

//           {/* Explore Dropdown */}
//           <li className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="text-lg hover:text-teal-400 transition duration-300 flex items-center"
//             >
//               Explore
//               <svg
//                 className={`ml-1 w-4 h-4 transition-transform duration-300 ${
//                   dropdownOpen ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 ></path>
//               </svg>
//             </button>
//             {dropdownOpen && (
//               <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50 overflow-visible">
//                 {Object.keys(exploreRoutes).map((subItem) => (
//                   <li key={subItem}>
//                     <Link
//                       to={exploreRoutes[subItem]} // Dynamic route for each sub-item
//                       className="block px-4 py-2 hover:bg-teal-400 hover:text-white transition duration-300"
//                       onClick={() => setDropdownOpen(false)}
//                     >
//                       {subItem}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex gap-4">
//           <Link to="/booking">
//             <button className="px-6 py-2 text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-lg uppercase hover:bg-orange-700 transition duration-300 shadow-md">
//               Book Now
//             </button>
//           </Link>
//           <Link to="/login">
//             <button className="px-6 py-2 text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-lg uppercase hover:bg-teal-700 transition duration-300 shadow-md">
//               Login
//             </button>
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {navbarState && (
//         <div className="fixed top-14 left-0 w-full bg-black shadow-lg md:hidden z-50">
//           <ul className="flex flex-col items-start p-4">
//             {/* Home link now redirects to the homepage */}
//             <li key="home" className="w-full mb-4">
//               <Link
//                 to="/" // Hardcoded to the homepage
//                 className="text-white text-lg hover:text-teal-400 transition duration-300"
//                 onClick={toggleNavbar}
//               >
//                 Home
//               </Link>
//             </li>

//             {["About", "Accomodation", "Testimonials"].map((item) => (
//               <li key={item} className="w-full mb-4">
//                 <Link
//                   to={`/${item.toLowerCase()}`}
//                   className="text-white text-lg hover:text-teal-400 transition duration-300"
//                   onClick={toggleNavbar}
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}

//             {/* Explore Dropdown */}
//             <li className="w-full mb-4 relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="text-white text-lg hover:text-teal-400 transition duration-300 flex items-center w-full"
//               >
//                 Explore
//                 <svg
//                   className={`ml-1 w-4 h-4 transition-transform duration-300 ${
//                     dropdownOpen ? "rotate-180" : ""
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   ></path>
//                 </svg>
//               </button>
//               {dropdownOpen && (
//                 <ul className="absolute left-0 top-full mt-2 w-full bg-black text-white rounded-md shadow-lg z-50 overflow-visible">
//                   {Object.keys(exploreRoutes).map((subItem) => (
//                     <li key={subItem} className="w-full">
//                       <Link
//                         to={exploreRoutes[subItem]} // Dynamic route for each sub-item
//                         className="block px-4 py-2 hover:bg-teal-400 hover:text-white transition duration-300"
//                         onClick={() => {
//                           setDropdownOpen(false);
//                           setNavbarState(false);
//                         }}
//                       >
//                         {subItem}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//             <li className="w-full mt-4">
//               <Link to="/booking">
//                 <button
//                   className="w-full px-6 py-3 text-white bg-orange-600 rounded-lg text-lg uppercase hover:bg-orange-700 transition duration-300 shadow-md mb-4"
//                   onClick={toggleNavbar}
//                 >
//                   Book Now
//                 </button>
//               </Link>
//               <Link to="/login">
//                 <button
//                   className="w-full px-6 py-3 text-white bg-teal-600 rounded-lg text-lg uppercase hover:bg-teal-700 transition duration-300 shadow-md"
//                   onClick={toggleNavbar}
//                 >
//                   Login
//                 </button>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }

import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setNavbarState(!navbarState);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Navigation items
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Accommodation", path: "/accommodation" },
  ];

  // Dropdown Items
  const exploreRoutes = {
    Destinations: "/recommend",
    Activities: "/activities",
    Accommodation: "/accommodation",
    TravelTips: "/travel-tips",
  };

  return (
    <>
      {/* Navbar */}
      <nav className="relative flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg border-b border-gray-700 z-50">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold uppercase tracking-wide">
            Tour
          </Link>
          <div className="md:hidden" onClick={toggleNavbar}>
            {navbarState ? (
              <VscChromeClose className="text-3xl cursor-pointer" />
            ) : (
              <GiHamburgerMenu className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-lg hover:text-teal-400 transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Explore Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-lg flex items-center hover:text-teal-400 transition duration-300"
            >
              Explore
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden animate-fadeIn">
                {Object.keys(exploreRoutes).map((item) => (
                  <li key={item}>
                    <Link
                      to={exploreRoutes[item]}
                      className="block px-4 py-2 hover:bg-teal-400 hover:text-white transition duration-300"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/booking">
            <button className="px-6 py-2 text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-lg uppercase hover:shadow-md transition duration-300">
              Book Now
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-2 text-white bg-gradient-to-r from-blue-400 to-teal-500 rounded-lg text-lg uppercase hover:shadow-md transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {navbarState && (
        <div className="fixed top-14 left-0 w-full bg-black shadow-lg md:hidden z-50 animate-slideIn">
          <ul className="flex flex-col items-start p-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <Link
                  to={link.path}
                  className="text-white text-lg hover:text-teal-400 transition duration-300"
                  onClick={toggleNavbar}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Explore Dropdown */}
            <li className="w-full relative">
              <button
                onClick={toggleDropdown}
                className="text-white text-lg flex items-center w-full hover:text-teal-400 transition duration-300"
              >
                Explore
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 w-full bg-black text-white rounded-md shadow-lg z-50 overflow-hidden animate-fadeIn">
                  {Object.keys(exploreRoutes).map((item) => (
                    <li key={item} className="w-full">
                      <Link
                        to={exploreRoutes[item]}
                        className="block px-4 py-2 hover:bg-teal-400 hover:text-white transition duration-300"
                        onClick={() => {
                          setDropdownOpen(false);
                          setNavbarState(false);
                        }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile Buttons */}
            <li className="w-full mt-4 flex flex-col gap-4">
              <Link to="/booking">
                <button
                  className="w-full px-6 py-3 text-white bg-orange-600 rounded-lg text-lg uppercase hover:bg-orange-700 transition duration-300 shadow-md"
                  onClick={toggleNavbar}
                >
                  Book Now
                </button>
              </Link>
              <Link to="/login">
                <button
                  className="w-full px-6 py-3 text-white bg-teal-600 rounded-lg text-lg uppercase hover:bg-teal-700 transition duration-300 shadow-md"
                  onClick={toggleNavbar}
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
