"use client";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <section
        id="about"
        className="about-section fix section-padding scrollSpySection"
      >
        <div className="container">
          <div className="about-wrapper-2">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image">
                  <Image
                    src="/assets/img/about/03.jpg"
                    alt="img"
                    width={337}
                    height={378}
                    className="wow fadeInLeft"
                    data-wow-delay=".3s"
                  />
                  <div
                    className="about-image-2 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <Image
                      src="/assets/img/about/04.jpg"
                      width={303}
                      height={323}
                      alt="img"
                    />
                  </div>
                  <div className="video-items wow fadeInUp">
                    <a
                      onClick={() => setOpen(true)}
                      className="video-btn video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                    <a
                      onClick={() => setOpen(true)}
                      className="video-text video-popup"
                    >
                      {t("play_now")}
                    </a>
                  </div>
                  <div className="bar-shape">
                    <Image
                      src="/assets/img/about/bar.png"
                      width={40}
                      height={207}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <h6 className="wow fadeInUp">
                      <i className="fa-regular fa-arrow-left-long" />
                      {t("about_our_company")}
                      <i className="fa-regular fa-arrow-right-long" />
                    </h6>
                    <h2 className="splt-txt wow">
                      {t("pioneers_in_ovens")} <br />
                      {t("with_green_hydrogen")}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    {t("about_description")}
                  </p>
                  <div className="row g-4 mt-3">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="icon-items">
                        <div className="icon">
                          <Image
                            src="/assets/img/icon/05.svg"
                            width={50}
                            height={50}
                            alt="img"
                          />
                        </div>
                        <h5 className="splt-txt wow">
                         {t("innovation_technology")}
                        </h5>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="icon-items">
                        <div className="icon">
                          <Image
                            src="/assets/img/icon/06.svg"
                            width={50}
                            height={50}
                            alt="img"
                          />
                        </div>
                        <h5 className="splt-txt wow">
                          {t("complete_solution")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      {t("conversion_technology")}
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      {t("iot_system")}
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      {t("extra_income")}
                    </li>
                  </ul>
                  <div className="about-author">
                    <Link
                      href={`/about`}
                      className="theme-btn wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      {t("discover_more")} <i className="fa-regular fa-arrow-right" />
                    </Link>
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <Image
                        src="/assets/img/about/author.png"
                        width={68}
                        height={68}
                        alt="author-img"
                      />
                      <div className="content">
                        <p>{t("ceo")}</p>
                        <h4>Luis Pineda</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Cn4G2lZ_g2I"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
