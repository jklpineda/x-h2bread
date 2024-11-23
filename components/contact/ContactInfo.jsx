"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="contact-info-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            {t("contact_us")}
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            {t("our_contact_information")}
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="contact-box-items">
              <div className="icon">
                <Image
                  src="/assets/img/icon/18.svg"
                  width={60}
                  height={60}
                  alt="img"
                />
              </div>
              <div className="content">
                <h3>{t("our_address")}</h3>
                <p>
                  {t("coming_soon")}
                  <br />
                  {t("lima_peru")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="contact-box-items">
              <div className="icon">
                <Image
                  src="/assets/img/icon/19.svg"
                  width={60}
                  height={60}
                  alt="img"
                />
              </div>
              <div className="content">
                <h3>{t("email_address")}</h3>
                <p>
                  {t("mobile")} :<a href="tel:+51995832403"> +51 995 832 403</a> <br />
                  {t("email")} :
                  <a href="mailto:future@h2bread.me"> future@h2bread.me</a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="contact-box-items">
              <div className="icon">
                <Image
                  src="/assets/img/icon/20.svg"
                  width={60}
                  height={60}
                  alt="img"
                />
              </div>
              <div className="content">
                <h3>{t("hours_of_operation")}</h3>
                <p>
                  {t("monday_saturday")} : 8:00 - <br />
                  {t("sunday")} : {t("closed")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
