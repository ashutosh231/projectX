import { useState, useEffect } from "react";
// import logo from "../assets/logo.png";

export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollState(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-4 right-4 z-10 p-3 rounded-full bg-black-600 hover:bg-blue-700 transition-all shadow-lg ${
        scrollState ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* <img src={logo} alt="Scroll to Top" className="w-8 h-8"/> */}
    </button>
  );
}
