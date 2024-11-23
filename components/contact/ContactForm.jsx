"use client";
import React, { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const form = useRef();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendMail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      phone: formData.get("number"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzhyUGpSZSlR8ihfMJofYLKtK4JdHwY4u4-vxlXtGwixrvxFDCEW8jZOoJj8PN8HZvC9w/exec", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
      });

      const result = await response.json();
      if (result.result === "success") {
        toast.success(t("message_sent_successfully"), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        form.current.reset();
      } else {
        toast.error(t("message_not_sent"), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error(t("message_not_sent"), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <section className="contact-section-22">
      <div className="container">
        <div className="contact-form-items">
          <div className="title text-center">
            <h2 className="splt-txt wow">
              {t("get_in_touch")}
            </h2>
          </div>
          <form ref={form} onSubmit={sendMail}>
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder={t("first_name")}
                    required
                  />
                  <div className="icon">
                    <i className="fa-regular fa-user" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="form-clt">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder={t("last_name")}
                    required
                  />
                  <div className="icon">
                    <i className="fa-regular fa-user" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder={t("phone_number")}
                    required
                  />
                  <div className="icon">
                    <i className="fa-regular fa-phone" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="form-clt">
                  <input
                    type="text"
                    name="email"
                    id="email3"
                    placeholder={t("email_address")}
                    required
                  />
                  <div className="icon">
                    <i className="fa-regular fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                <div className="form-clt">
                  <textarea
                    name="message"
                    id="message"
                    placeholder={t("whats_on_your_mind")}
                    defaultValue={""}
                    required
                  />
                  <div className="icon">
                    <i className="fa-sharp fa-light fa-pencil" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                <button type="submit" className="theme-btn w-100">
                  {t("send_message_now")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
