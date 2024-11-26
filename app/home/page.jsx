'use client';

import React from "react";
import Header from "@/components/header/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Brands from "@/components/common/Brands";
import Projects from "@/components/home/Projects";
import Team from "@/components/home/Team";
import Pricing from "@/components/home/Pricing";
import Cta from "@/components/home/Cta";
import Achievements from "@/components/home/Achievements";
import Testimonials from "@/components/home/Testimonials";
import Blogs from "@/components/home/Blogs";
import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <div className="brand-section fix section-padding">
        <Brands />
      </div>
      <Projects />
      <Team />
      <section className="pricing-section fix section-padding bg-cover">
        <div className="pricing-arrow-shape float-bob-y">
          <Image
            src="/assets/img/pricing-arrow-shape.png"
            width={329}
            height={494}
            alt="img"
          />
        </div>
        <div className="pricing-circle-shape float-bob-x">
          <Image
            src="/assets/img/pricing-circle-shape.png"
            width={616}
            height={538}
            alt="img"
          />
        </div>
        <Pricing />
      </section>
      <Cta />
      <Achievements />
      <Testimonials />
      <Blogs />
      <Footer1 />
    </>
  );
}