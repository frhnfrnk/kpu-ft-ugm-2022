import React from "react";
import { Carousel } from "antd";
import { ACARA, HUMAS, IT, KETUA, KSK, MEDPUB } from "../../assets/images/imgKPU";

export default function CarouselPanitia() {
  return (
    <container>
      <Carousel autoplaySpeed={20}>
        <div className="container-panitia">
          <img alt="ketua" src={KETUA} />
        </div>
        <div className="container-panitia">
          <img alt="ksk" className="mx-auto" src={KSK} />
        </div>
        <div className="container-panitia">
          <img alt="acara" className=" mx-auto" src={ACARA} />
        </div>
        <div className="container-panitia">
          <img alt="it" className="mx-auto" src={IT} />
        </div>
        <div className="container-panitia">
          <img alt="medpub" className="mx-auto" src={MEDPUB} />
        </div>
        <div className="container-panitia">
          <img alt="humas" className="mx-auto" src={HUMAS} />
        </div>
      </Carousel>
    </container>
  );
}
