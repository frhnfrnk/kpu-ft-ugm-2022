import bgError from "../assets/TentangKPU/BgError.png";
function Error() {
  return (
    <>
      <div class="bg-[#E1DAD1] h-full w-full">
        <div class="sm:bg-contain  sm:w-[1440px] sm:h-[770px] lg:md:h-full lg:md:w-full bg-no-repeat md:bg-contain" style={{ backgroundImage: "url(" + bgError + ")" }}>
          <h1 class="text-[#2A374A] font-bold font-Playfair text-[45px] text-center sm:p-[90px] lg:md:p-[270px]">ERROR 404</h1>
        </div>
      </div>
    </>
  );
}

export default Error;
