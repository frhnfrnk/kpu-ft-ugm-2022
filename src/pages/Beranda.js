import Countdown from "../components/Beranda/Countdown";
import Hero from "../components/Beranda/Hero";
import Kritik from "../components/HomePage/kritikSaran";
import Tentang from "../components/HomePage/about";
import Tutor from "../components/HomePage/tutor";
import Calonnew from "../components/HomePage/calonnew";
function Beranda() {
  return (
    <>
    <Hero/>
    <Countdown />
    <Calonnew />
    <Tentang />
    <Tutor />
    <Kritik />

    </>
  );
}

export default Beranda;
