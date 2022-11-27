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
        <img src={First} className="border-2 border-[#8A2D2D]  rounded-[4px] mx-auto w-[70%]" loading="lazy" alt="First" />
      </SplideSlide>
      <SplideSlide>
        <img src={Second} className="border-2 border-[#8A2D2D]  rounded-[4px] mx-auto w-[70%]" loading="lazy" alt="Second" />
      </SplideSlide>
      <SplideSlide>
        <img src={Third} className="border-2 border-[#8A2D2D]  rounded-[4px] mx-auto w-[70%]" loading="lazy" alt="Third" />
      </SplideSlide>
      <SplideSlide>
        <img src={Fourth} className="border-2 border-[#8A2D2D]  rounded-[4px] mx-auto w-[70%]" loading="lazy" alt="Fourth" />
      </SplideSlide>
      <SplideSlide>
        <img src={Fifth} className="border-2 border-[#8A2D2D]  rounded-[4px] mx-auto w-[70%]" loading="lazy" alt="Fifth" />
      </SplideSlide>
      <SplideSlide>
        <img src={Six} className="border-2 border-[#8A2D2D]  rounded-[4px] mx-auto w-[70%]" loading="lazy" alt="Six" />
      </SplideSlide>
    </Splide>
  );
}
