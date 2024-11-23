"use client";
import { teamMembers2 } from "@/data/team";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";

export default function Team() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="team-section section-padding">
      <div className="shape-1 float-bob-y">
        <Image
          src="/assets/img/team/shape-1.png"
          width={161}
          height={250}
          alt="img"
        />
      </div>
      <div className="shape-2">
        <Image
          src="/assets/img/team/shape-2.png"
          width={352}
          height={428}
          alt="img"
        />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            {t("our_team_members")}
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            {t("team_innovators")}
          </h2>
        </div>
        <div className="row">
          {teamMembers2.map((member) => (
            <div
              key={member.id}
              className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp${
                member.active ? " active" : ""
              }`}
              data-wow-delay={member.delay}
            >
              <div className="team-box-items">
                <div className="social-icon d-grid align-items-center">
                  {member.socials.map((link, index) => (
                    <a key={index} href={link.href}>
                      <i className={link.iconClass} />
                    </a>
                  ))}
                </div>
                <div className="team-image">
                  <Image
                    src={member.image}
                    width={240}
                    height={288}
                    alt="Team"
                  />
                </div>
                <div className="team-content">
                  <h5>
                    <Link href={`/team-details/${member.id}`}>
                      {member.name}
                    </Link>
                  </h5>
                  <p>{member.role}</p>
                  <a href="team-details" className="icon">
                    <i className="fa-solid fa-link" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
