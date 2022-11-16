import bgError from "../assets/TentangKPU/BgError.png";
function Error() {
  return (
    <>
      <div class="bg-[#E1DAD1] h-full w-full">
        <div
          class="lg:bg-cover sm:bg-contain
         w-full lg:h-auto sm:h-auto sm:bg-no-repeat lg:bg-repeat-x"
          style={{ backgroundImage: "url(" + bgError + ")" }}
        >
          <h1 class="text-[#2A374A] font-bold font-Playfair lg:text-[120px] sm:text-[45px] text-center sm:p-[400px] lg:p-[295px]">ERROR 404</h1>
        </div>
      </div>
    </>
  );
}

export default Error;
