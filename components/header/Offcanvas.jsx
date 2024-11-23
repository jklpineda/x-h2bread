"use client";

import { closeMobilemenu } from "@/utlis/toggleMobilemenu";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";

export default function Offcanvas({ children }) {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="fix-area">
        <div className="offcanvas__info ">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image
                      src="/assets/img/logo/black-logo.svg"
                      width={149}
                      height={64}
                      alt="logo-img"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </Link>
                </div>
                <div
                  onClick={() => closeMobilemenu()}
                  className="offcanvas__close"
                >
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                {t("transform_bakeries")}
              </p>
              <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                  <a
                    href="#nav"
                    className="meanmenu-reveal"
                    style={{ right: 0, left: "auto", display: "inline" }}
                  >
                    <span>
                      <span>
                        <span />
                      </span>
                    </span>
                  </a>
                  <nav className="mean-nav">
                    <ul style={{ display: "none" }}>{children}</ul>
                  </nav>
                </div>
              </div>

              <div className="offcanvas__contact">
                <h4>{t("contact_info")}</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        {t("lima_peru")}
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:future@h2bread.me">
                        <span className="mailto:info@example.com">
                          future@h2bread.me
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        {t("mod_friday_hours")}
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+51 995832403">+51 995 832 403</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <a href="/contact" className="theme-btn text-center">
                    <span>
                      {t("get_a_quote")}
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </a>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay " onClick={() => closeMobilemenu()} />
    </>
  );
}
