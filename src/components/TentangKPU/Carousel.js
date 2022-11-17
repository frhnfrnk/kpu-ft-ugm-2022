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
          <img alt="ksk" src={KSK} />
        </div>
        <div className="container-panitia">
          <img alt="acara" className=" flex-auto justify-center" src={ACARA} />
        </div>
        <div className="container-panitia">
          <img alt="it" src={IT} />
        </div>
        <div className="container-panitia">
          <img alt="medpub" src={MEDPUB} />
        </div>
        <div className="container-panitia">
          <img alt="humas" src={HUMAS} />
        </div>
      </Carousel>
    </container>
  );
}
