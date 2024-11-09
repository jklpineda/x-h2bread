"use client";

import { useEffect } from "react";
import "../public/assets/scss/styles.scss";
import BackToTop from "@/components/common/BackToTop";
import Mouse from "@/components/common/Mouse";
import { usePathname } from "next/navigation";
import SearchWrap from "@/components/common/SearchWrap";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  const path = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header-sticky");
      if (header) {
        if (window.scrollY > 250) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Bootstrap JS loaded
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const { WOW } = require("wowjs");
    const wow = new WOW({
      animateClass: "animated",
      offset: 100,
      mobile: false,
      live: false,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
        <SearchWrap />
        <BackToTop />
        <Mouse />
      </body>
    </html>
  );
}
