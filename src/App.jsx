
import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router";
import AOS from "aos";

// Common Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Website Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Batches from "./pages/Batches";
import Contact from "./pages/Contact";

// Main Styles
import "./App.css";

// Scroll To Top On Page Change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    const frame = requestAnimationFrame(() => {
      AOS.refreshHard();
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}

// Main App
export default function App() {
  return (
    <>
      <ScrollToTop />

      {/* Common Header */}
      <Header />

      {/* Main Website Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/batches" element={<Batches />} />

        <Route path="/contact" element={<Contact />} />

        {/* Redirect Old Course Detail URLs */}
        <Route
          path="/courses/:slug"
          element={<Navigate to="/courses" replace />}
        />

        {/* Unknown URLs */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>

      {/* Common Footer */}
      <Footer />
    </>
  );
}
