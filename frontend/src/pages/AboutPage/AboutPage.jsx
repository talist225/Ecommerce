import React from "react";
import "./aboutPage.css";

const AboutPage = () => {
  return (
    <>
      <center className="text-center about">
        <h2 className="mb-4 text-center">
          קובץ PDF Documentation של כל הפרויקט
        </h2>
        <a href="../../../ProjectDocumentation.pdf" download={true}>
          Download Documentation
        </a>
        <h4 className="mt-4 mb-4 text-center">קישור ל- GitHub</h4>
        <a href="https://github.com/talist225/Ecommerce">GitHub</a>
      </center>
    </>
  );
};
export default AboutPage;
