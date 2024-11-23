import React from "react";

export default function Map() {
  return (
    <div className="office-google-map-wrapper">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31215.07009862098!2d-77.0219015!3d-12.0515179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1731829080823!5m2!1ses-419!2spe"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            />
    </div>
  );
}
