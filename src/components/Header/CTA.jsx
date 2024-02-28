import React from "react";
import CV1 from "../../assets/cv_es.pdf";
import CV2 from "../../assets/cv_en.pdf";
import { BiDownload } from "react-icons/bi";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV1} download className="btn">
        CV - ES
        <BiDownload />
      </a>
      <a href={CV2} download className="btn">
        CV - EN
        <BiDownload />
      </a>
    </div>
  );
};

export default CTA;
