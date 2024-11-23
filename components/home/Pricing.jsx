"use client";
import { pricingPlans } from "@/data/pricing";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Pricing({ shadow = false }) {
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
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            {t("pricing_plans")}
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            {t("sustainable_plans")}
          </h2>
        </div>
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp ${
                plan.active ? "active" : ""
              }`}
              data-wow-delay={plan.delay}
            >
              <div
                className={`pricing-card-items ${plan.active ? "active" : ""} ${
                  shadow ? "box-shadow" : ""
                } `}
              >
                {plan.active && (
                  <div className="tag-img">
                    <Image
                      src="/assets/img/tag.png"
                      width={94}
                      height={98}
                      alt="img"
                    />
                  </div>
                )}

                <div className="pricing-header">
                  <h3>{plan.title}</h3>
                  <h2>
                    {plan.price}/<span>{plan.frequency}</span>
                  </h2>
                </div>
                <ul className="pricing-list">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={feature.available === false ? "style-2" : ""}
                    >
                      <i
                        className={`fa-solid ${
                          feature.available === false ? "fa-xmark" : "fa-check"
                        }`}
                      ></i>
                      {typeof feature === "string" ? feature : feature.feature}
                    </li>
                  ))}
                </ul>
                <div className="header-button">
                  <Link
                    href="/pricing"
                    className={`theme-btn ${plan.active ? "" : "style-2"}`}
                  >
                    <span></span>{t("choose_plan")}
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
