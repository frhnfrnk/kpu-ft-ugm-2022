import Kritik from "../components/HomePage/kritikSaran";
import Tentang from "../components/HomePage/about";
import Tutor from "../components/HomePage/tutor";
import Calonnew from "../components/HomePage/calonnew";
function Beranda() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello Beranda!
    </h1>

    <Calonnew/> 
    <Tentang/>
    <Tutor/>
    <Kritik/>
    
    </>
  );
}

export default Beranda;
