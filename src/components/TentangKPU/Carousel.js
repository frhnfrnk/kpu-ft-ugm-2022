import React from "react";
import { ACARA, HUMAS, IT, KETUA, KSK, MEDPUB, PERKAP } from "../../assets/images/imgKPU";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SplidePanitia() {

 

  return (
    <Splide
      aria-label="Panitia_KPU"
      options={{
        type: "loop",
        rewind: true,
        isNavigation: true,
      }}
    >


      <SplideSlide>
        <img src={KETUA} className="mx-auto mt-[20px]" loading="lazy" alt="ketua" />
      </SplideSlide>
      <SplideSlide>
        <img src={ACARA} className="mx-auto mt-[20px]" alt="acara" loading="lazy" />
      </SplideSlide>
      <SplideSlide>
        <img src={IT} className="mx-auto mt-[20px]" alt="it"  loading="lazy"/>
      </SplideSlide>
      <SplideSlide>
        <img src={MEDPUB} className="mx-auto mt-[20px]" alt="medpub" loading="lazy"/>
      </SplideSlide> 
      <SplideSlide>
        <img src={KSK} className="mx-auto mt-[20px]" alt="ksk" loading="lazy"/>
      </SplideSlide>
      <SplideSlide>
        <img src={HUMAS} className="mx-auto mt-[20px]" alt="humas" loading="lazy"/>
      </SplideSlide>
      <SplideSlide>
        <img src={PERKAP} className="mx-auto mt-[20px]" alt="perkap" loading="lazy"/>
      </SplideSlide>
    </Splide>
  );
}
