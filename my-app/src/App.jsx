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
import Activities from "./components/Activities";
import Accommodation from "./components/Accomodation";  // Fixed path
import TravelTips from "./components/TravelTips";
import BookingPage from "../src/pages/BookingPage";
import DestinationBooking from "./pages/DestinationBooking";
import AccommodationBooking from "./pages/AccommodationBooking";
import Payment from "./pages/Payment";
import AuthPage from "./pages/AuthPage";

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "90px",
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
        footer,
        #activities,
        #accommodation,
        #travel-tips
      `,
      {
        opacity: 0.8,
        interval: 100, // Faster reveal timing
      }
    );

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
                <Hero />
                <Services />
                <Recommend />
                <Testimonials />
                <About />
              </>
            }
          />
          {/* About Page */}
          <Route path="/about" element={<About />} />
          {/* Recommend Page */}
          <Route path="/recommend" element={<Recommend />} />
          {/* Login Page */}
          <Route path="/login" element={<AuthPage/>}/>
          
          {/* Activities Page */}
          <Route path="/activities" element={<Activities />} />
          {/* Accommodation Page */}
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/travel-tips" element={<TravelTips />} />
          <Route path="/booking" element={<BookingPage />} />
        <Route path="/select-destination" element={<DestinationBooking />} />
        <Route path="/select-accommodation" element={<AccommodationBooking />} />
        <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
