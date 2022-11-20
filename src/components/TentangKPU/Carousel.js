import React from "react";
import { ACARA, HUMAS, IT, KETUA, KSK, MEDPUB } from "../../assets/images/imgKPU";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SplidePanitia() {
  return (
    <Splide
      aria-label="Panitia_KPU"
      options={{
        rewind: false,
        isNavigation: true,
      }}
    >
      <SplideSlide>
        <img src={KETUA} className="mx-auto mt-[20px]" alt="ketua" />
      </SplideSlide>
      <SplideSlide>
        <img src={ACARA} className="mx-auto mt-[20px]" alt="acara" />
      </SplideSlide>
      <SplideSlide>
        <img src={IT} className="mx-auto mt-[20px]" alt="it" />
      </SplideSlide>
      <SplideSlide>
        <img src={MEDPUB} className="mx-auto mt-[20px]" alt="medpub" />
      </SplideSlide>
      <SplideSlide>
        <img src={KSK} className="mx-auto mt-[20px]" alt="ksk" />
      </SplideSlide>
      <SplideSlide>
        <img src={HUMAS} className="mx-auto mt-[20px]" alt="humas" />
      </SplideSlide>
    </Splide>
  );
}
