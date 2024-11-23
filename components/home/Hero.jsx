"use client";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { useTranslation } from "react-i18next";
import SplitType from 'split-type';

export default function Hero() {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    if (titleRef.current) {
      const text = new SplitType(titleRef.current, { types: 'chars' });
      text.chars;
    }
  }, []);

  const swiperOptions = {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: ".array-prevs",
      nextEl: ".array-nexts",
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
      1199: { slidesPerView: 2 },
      991: { slidesPerView: 2 },
      767: { slidesPerView: 2 },
      575: { slidesPerView: 1 },
      0: { slidesPerView: 1 },
    },
  };

  const images = [
    "/assets/img/hero/01.jpg",
    "/assets/img/hero/02.jpg",
    "/assets/img/hero/01.jpg",
    "/assets/img/hero/02.jpg",
  ];

  if (!isClient) return null;

  return (
      <>
        <section className="hero-section hero-1 fix section-padding">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-lg-7">
                <div className="hero-content">
                  <h1 ref={titleRef} className="hero-title">
                    {t("hero_title")}
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    {t("hero_subtitle")}
                  </p>
                  <div className="hero-button">
                    <Link
                        href="/about"
                        className="theme-btn bg-white wow fadeInUp"
                        data-wow-delay=".3s"
                    >
                      {t("start_today")}
                      <i className="fa-regular fa-arrow-right"></i>
                    </Link>
                    <span className="button-text wow fadeInUp" data-wow-delay=".5s">
                    <a onClick={() => setOpen(true)} className="video-btn video-popup">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <span className="ms-3 d-line">{t("play_reel")}</span>
                  </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="hero-image-items">
                  <Swiper {...swiperOptions} className="swiper hero-slider">
                    {images.map((src, index) => (
                        <SwiperSlide className="swiper-slide" key={index}>
                          <div className="hero-image">
                            <Image
                                width={475}
                                height={635}
                                src={src}
                                alt={`Hero ${index + 1}`}
                            />
                          </div>
                        </SwiperSlide>
                    ))}
                    <div className="array-button">
                      <button className="array-prevs">
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.5 0L0 5.5L5.5 11L6.5 10L2 5.5L6.5 1L5.5 0Z" fill="currentColor"/>
                        </svg>
                        {t("previous")}
                      </button>
                      <button className="array-nexts">
                        {t("next")}
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.5 0L15 5.5L9.5 11L8.5 10L13 5.5L8.5 1L9.5 0Z" fill="currentColor"/>
                        </svg>
                      </button>
                    </div>
                  </Swiper>
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
        />
      </>
  );
}