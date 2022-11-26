import React from "react";
import { First, Second, Third, Fourth, Fifth, Six } from "../../assets/Tatacara/tatacara";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function TutorCarousel() {

 

  return (
    <Splide
      aria-label="Tatacara_Pemilihan"
      options={{
        type: "loop",
        rewind: true,
        isNavigation: true,
      }}
    >


      <SplideSlide>
        <img src={First} className="mx-auto w-[70%]" alt="First" />
      </SplideSlide>
      <SplideSlide>
        <img src={Second} className="mx-auto w-[70%]" alt="Second" />
      </SplideSlide>
      <SplideSlide>
        <img src={Third} className="mx-auto w-[70%]" alt="Third" />
      </SplideSlide>
      <SplideSlide>
        <img src={Fourth} className="mx-auto w-[70%]" alt="Fourth" />
      </SplideSlide>
      <SplideSlide>
        <img src={Fifth} className="mx-auto w-[70%]" alt="Fifth" />
      </SplideSlide>
      <SplideSlide>
        <img src={Six} className="mx-auto w-[70%]" alt="Six" />
      </SplideSlide>
    </Splide>
  );
}
