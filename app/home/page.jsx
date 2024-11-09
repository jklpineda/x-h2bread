import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header from "@/components/header/Header";
import About from "@/components/home/About";
import Achievements from "@/components/home/Achievements";
import Blogs from "@/components/home/Blogs";
import Cta from "@/components/home/Cta";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Projects from "@/components/home/Projects";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import React from "react";
import Image from "next/image";
import Services from "@/components/home/Services";
export const metadata = {
  title: "Home || H2Bread",
  description: "H2Bread - Startup",
};
export default function page() {
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
      <section
        className="pricing-section fix section-padding bg-cover"
        style={{ backgroundImage: 'url("/assets/img/pricing-bg.jpg")' }}
      >
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
