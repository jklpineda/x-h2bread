"use client";

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header from "@/components/header/Header";
import Team from "@/components/team/Team";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.init();
    }
  }, [i18n]);

  if (!i18n.isInitialized) {
    return null; // or a loading spinner
  }

  return (
    <>
      <Header />
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("/assets/img/breadcrumb-bg.jpg")' }}
      >
        <div className="shape-image float-bob-y">
          <Image
            src="/assets/img/vector.png"
            width={84}
            height={186}
            alt="img"
          />
        </div>
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  {t('team_title')}
                </h1>
              </div>
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
                <li>
                  <Link href={`/`}> {t('home')} </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-slash-forward" />
                </li>
                <li>{t('team')}</li>
              </ul>
            </div>
            <div className="breadcrumb-image">
              <Image
                src="/assets/img/breadcrumb-image.png"
                width={540}
                height={450}
                alt="img"
                className="float-bob-x"
              />
              <div className="bar-shape">
                <Image
                  src="/assets/img/breadcrumb-bar.png"
                  width={631}
                  height={604}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />

      <div className="brand-section fix section-padding pt-0">
        <Brands />
      </div>
      <Footer1 />
    </>
  );
}