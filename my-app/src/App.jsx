import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Recommend from "./components/Recommend";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import scrollreveal from "scrollreveal";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "100px",
      duration: 1000, // Faster animation
      reset: true,
    });

    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        #about,
        #login,
        #signup,
        footer
      `,
      {
        opacity: 0.8,
        interval: 100, // Faster reveal timing
      }
    );

    // Cleanup ScrollReveal instance on component unmount
    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="font-sans scroll-smooth bg-black">
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero id="hero" />
                <Services id="services" />
                <Recommend id="recommend" />
                <Testimonials id="testimonials" />
                <About id="about" />
              </>
            }
          />
          {/* About Page */}
          <Route path="/about" element={<About id="about" />} />
          {/* Recommend Page */}
          <Route path="/recommend" element={<Recommend id="recommend" />} />
          {/* Login Page */}
          <Route path="/login" element={<Login id="login" />} />
          {/* Signup Page */}
          <Route path="/signup" element={<SignUp id="signup" />} />
        </Routes>
        <Footer id="footer" />
      </div>
    </Router>
  );
}

export default App;