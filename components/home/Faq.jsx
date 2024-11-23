"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getFaqs } from "@/data/faq";
import { useTranslation } from "react-i18next";

export default function Faq() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const faqs = getFaqs();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section
      className="faq-section fix section-padding section-bg-2 bg-cover"
      style={{ backgroundImage: 'url("/assets/img/faq/bg-shape.png")' }}
    >
      <div className="track-shape float-bob-x">
        <Image src="/assets/img/track.png" width={163} height={79} alt="img" />
      </div>
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title">
                  <h6 className="wow fadeInUp">
                    <i className="fa-regular fa-arrow-left-long" />
                    {t("faq")}
                    <i className="fa-regular fa-arrow-right-long" />
                  </h6>
                  <h2 className="splt-txt wow">
                    {t("questions")}
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                  {t("faq_description")}
                </p>
                <div className="icon-items wow fadeInUp" data-wow-delay=".2s">
                  <div className="icon">
                    <i className="fa-regular fa-check" />
                  </div>
                  <div className="content">
                    <h5>{t("unique_projects")}</h5>
                    <span>{t("unique_projects_description")}</span>
                  </div>
                </div>
                <div className="icon-items wow fadeInUp" data-wow-delay=".4s">
                  <div className="icon">
                    <i className="fa-regular fa-check" />
                  </div>
                  <div className="content">
                    <h5>{t("unique_projects")}</h5>
                    <span>{t("unique_projects_description")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  {faqs.map((faq, index) => (
                    <div
                      key={faq.id}
                      className="accordion-item mb-3 wow fadeInUp"
                      data-wow-delay={faq.delay}
                    >
                      <h5 className="accordion-header">
                        <button
                          className={`accordion-button ${
                            faq.expanded ? "" : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq${faq.id}`}
                          aria-expanded={faq.expanded}
                          aria-controls={`faq${faq.id}`}
                        >
                          {faq.question}
                        </button>
                      </h5>
                      <div
                        id={`faq${faq.id}`}
                        className={`accordion-collapse collapse ${
                          faq.expanded ? "show" : ""
                        }`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">{faq.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
