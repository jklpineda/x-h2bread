"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import { services } from "@/data/services";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="service-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long"></i>
            {t("what_we_offer")}
            <i className="fa-regular fa-arrow-right-long"></i>
          </h6>
          <h2 className="splt-txt wow">
            {t("industrial_hydrogen_ovens")} <br />
            {t("for_bakeries")}
          </h2>
        </div>
        <div className="row">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div className="service-box-items items-bg">
                <div className="service-thumb">
                  <Image
                    src={service.image}
                    width={346}
                    height={236}
                    alt={t(service.title)}
                  />
                  <div className="icon">
                    <Image
                      src={service.icon}
                      width={32}
                      height={32}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="service-content">
                  <h2 className="number">{service.number}</h2>
                  <h3>
                    <Link href={`/service-details/${service.id}`}>
                      {t(service.title)}
                    </Link>
                  </h3>
                  <p>{t(service.description)}</p>
                  <Link
                    href={`/service-details/${service.id}`}
                    className="link-btn"
                  >
                    {t("explore_more")} <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="page-nav-wrap pt-5 text-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          <ul>
            <Pagination />
          </ul>
        </div>
      </div>
    </section>
  );
}
