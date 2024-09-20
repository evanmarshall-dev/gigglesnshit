"use client";

import { FaRebel } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function ToTopBtn() {
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`... scrollToTopButton ${
        isVisible ? "visible" : ""
      } fixed bottom-0 right-0 mr-6 mb-6 z-50 text-4xl`}
      onClick={scrollToTop}
    >
      <FaRebel />
    </button>
  );
}
