import React from "react";
import { Carousel } from "antd";
import { KETUA, IT, MEDPUB, ACARA, HUMAS, KSK } from "../../assets/images/imgKPU";

export default function CarouselPanitia() {
  return (
    <container>
      <Carousel autoplaySpeed={20} class=" flex justify center">
        <div className="container-panitia">
          <img alt="" className="w-[700px] h-[700px]" src={KETUA} />
        </div>
        <div className="container-panitia">
          <img alt="" className="w-[700px] h-[700px]" src={KSK} />
        </div>
        <div className="container-panitia">
          <img alt="" className="w-[700px] h-[700px] flex-auto justify-center" src={ACARA} />
        </div>
        <div className="container-panitia">
          <img alt="" className="w-[700px] h-[700px]" src={IT} />
        </div>
        <div className="container-panitia">
          <img alt="" className="w-[700px] h-[700px]" src={MEDPUB} />
        </div>
        <div className="container-panitia">
          <img alt="" className="w-[700px] h-[700px]" src={HUMAS} />
        </div>
      </Carousel>
    </container>
  );
}
