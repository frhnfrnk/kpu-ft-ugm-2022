import bgError from "../assets/TentangKPU/BgError.png";
function Error() {
  return (
    <>
      <div class="bg-[#E1DAD1] h-full w-full">
        <div
          class="lg:bg-cover bg-cover bg-center flex justify-center items-center
         w-full h-[100vh] bg-no-repeat sm:bg-no-repeat lg:bg-repeat-x"
          style={{ backgroundImage: "url(" + bgError + ")" }}
        >
          <h1 class="text-[#2A374A] font-bold font-Playfair lg:text-[120px] text-[45px] text-center p-[20px] lg:p-[295px] drop-shadow-[-8px_2px_10px_rgba(22,22,22,0.5)]">ERROR 404</h1>
        </div>
      </div>
    </>
  );
}

export default Error;
