import Achievments from "@/components/about/Achievments";
import Team from "@/components/about/Team";
import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header from "@/components/header/Header";
import About from "@/components/home/About";

import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "About || H2Bread",
  description: "H2Bread - Startup",
};

export default function page() {
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
                  About Us
                </h1>
              </div>
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
                <li>
                  <Link href={`/`}> Home </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-slash-forward" />
                </li>
                <li>About Us</li>
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
      <About />
      <Achievments />
      <Testimonials />

      <Team />
      <div className="brand-section fix section-padding pt-0">
        <Brands />
      </div>
      <Footer1 />
    </>
  );
}