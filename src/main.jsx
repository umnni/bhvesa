
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router";
import AOS from "aos";

import App from "./App";
import "aos/dist/aos.css";
import "./index.css";

function AppRoot() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const frame = requestAnimationFrame(() => {
      AOS.refreshHard();
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 65,
      easing: "ease-out-cubic",
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    return () => AOS.refreshHard();
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoot />
    </BrowserRouter>
  </React.StrictMode>
);
