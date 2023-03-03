import React from "react";
import { Image } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./marquee.css";
const MarqueeSlide = () => (
  <section className="marquee">
    <Marquee>
      <div>
        <Image src="/images/brand-01.png" alt="brand" />
      </div>
      <div>
        <Image src="/images/brand-04.png" alt="brand" />
      </div>
      <div>
        <Image src="/images/brand-05.png" alt="brand" />
      </div>
      <div>
        <Image src="/images/brand-06.png" alt="brand" />
      </div>
      <div>
        <Image src="/images/brand-07.png" alt="brand" />
      </div>
    </Marquee>
  </section>
);

export default MarqueeSlide;
