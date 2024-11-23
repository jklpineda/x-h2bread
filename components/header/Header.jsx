"use client";

import { useState, useEffect } from "react";
import { FaGlobe, FaSun, FaMoon } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import Offcanvas from "./Offcanvas";
import { openMobilemenu } from "@/utlis/toggleMobilemenu";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const handleSystemThemeChange = (e) => {
      const systemTheme = e.matches ? "dark" : "light";
      setTheme(systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
      localStorage.setItem("theme", systemTheme);
    };

    const handleLanguageChange = () => {
      setLanguage("es");
      i18n.changeLanguage("es");
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    handleSystemThemeChange(mediaQuery);
    handleLanguageChange();

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [i18n]);

  return (
    <>
      <header className="header-section">
        <div className="container-fluid">
          <div className="main-header-wrapper">
            <div className="logo-image">
              <Link href={`/`}>
                <Image
                  src="/assets/img/logo/black-logo.svg"
                  width={149}
                  height={64}
                  alt="img"
                />
              </Link>
            </div>
            <div className="main-header-items">
              <div className="header-contact-info-area">
                <div className="contact-info-items">
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                  </div>
                  <div className="content">
                    <p>Office location</p>
                    <h3>Lima, Peru</h3>
                  </div>
                </div>
                <div className="contact-info-items">
                  <div className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="content">
                    <p>send email</p>
                    <h3>
                      <a href="mailto:example@gmail.com">future@h2bread.me</a>
                    </h3>
                  </div>
                </div>
                <div className="contact-info-items style-2">
                  <div className="icon">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="content">
                    <p>call contact</p>
                    <h3>
                      <a href="tel:+51995832403">+51 995 832 403</a>
                    </h3>
                  </div>
                </div>
                <div className="header-button">
                  <button onClick={toggleLanguage} className="theme-btn">
                    <FaGlobe /> {language === "en" ? "ES" : "EN"}
                  </button>
                  <button onClick={toggleTheme} className="theme-btn">
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                  </button>
                </div>
              </div>
              <div id="header-sticky" className="header-1">
                <div className="mega-menu-wrapper">
                  <div className="header-main">
                    <div className="logo">
                      <Link href={`/`} className="header-logo">
                        <Image
                          src="/assets/img/logo/black-logo.svg"
                          alt="logo-img"
                          width={149}
                          height={64}
                        />
                      </Link>
                    </div>
                    <div className="header-left">
                      <div className="mean__menu-wrapper">
                        <div className="main-menu">
                          <nav id="mobile-menu">
                            <ul>
                              <Nav />
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className="header-right d-flex justify-content-end align-items-center">
                      <a
                        href="#0"
                        onClick={() =>
                          document
                            .getElementById("searchWrap")
                            .classList.add("active")
                        }
                        className="search-trigger search-icon"
                      >
                        <i className="fal fa-search"></i>
                      </a>
                      <div className="header__hamburger d-xl-block my-auto">
                        <div
                          onClick={() => openMobilemenu()}
                          className="sidebar__toggle"
                        >
                          <i className="fas fa-bars"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas>
        <Nav />
      </Offcanvas>
    </>
  );
}
