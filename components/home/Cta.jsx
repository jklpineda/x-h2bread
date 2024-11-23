"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Cta() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section
      className="cta-section-2 bg-cover fix"
      style={{ backgroundImage: 'url("/assets/img/cta-bg-2.jpg")' }}
    >
      <div className="container">
        <div className="cta-banner-wrapper-2">
          <div className="cta-content">
            <h2 className="splt-txt wow">
              {t("do_you_have_any_questions_about")}
            </h2>
            <Link
              href="/contact"
              className="theme-btn wow fadeInUp"
              data-wow-delay=".4s"
            >
              {t("lets_talk")}
              <i className="fa-regular fa-arrow-right" />
            </Link>
          </div>
          <div className="cta-image wow fadeInUp" data-wow-delay=".3s">
            <Image
              src="/assets/img/engineer-holding.png"
              width={410}
              height={424}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
