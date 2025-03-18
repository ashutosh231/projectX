

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Recommend from "./components/Recommend";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import scrollreveal from "scrollreveal";
import Activities from "./components/Activities";
import Accommodation from "./components/Accomodation"; // Fixed import
import TravelTips from "./components/TravelTips";
import BookingPage from "./pages/BookingPage";
import DestinationBooking from "./pages/DestinationBooking";
import AccommodationBooking from "./pages/AccommodationBooking";
import Payment from "./pages/Payment";
import  Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import paymentOption from "./components/paymentOption";


function ScrollRevealEffect() {
  const location = useLocation(); // Detects route changes

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "90px",
      duration: 800, // Smooth transition
      reset: false, // Prevents repeated resets
    });

    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        #about,
        #activities,
        #accommodation,
        #travel-tips,
        footer
      `,
      {
        opacity: 0,
        interval: 150, // Smooth staggered reveal
      }
    );

    return () => {
      sr.destroy();
    };
  }, [location]); // Runs when the route changes

  return null;
}

function App() {
  return (
    <Router>
      <ScrollRevealEffect />
      <div className="font-sans scroll-smooth bg-black">
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Recommend />
                <Testimonials />
                <About />
              </>
            }
          />
          {/* Individual Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/login" element={<Login />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/travel-tips" element={<TravelTips />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/select-destination" element={<DestinationBooking />} />
          <Route path="/select-accommodation" element={<AccommodationBooking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentOption" element={<paymentOption/>}/>
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;