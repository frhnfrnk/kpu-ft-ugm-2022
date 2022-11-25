import { Routes , Route, BrowserRouter as Router, redirect, useNavigate, Navigate } from "react-router-dom";
import Beranda from './pages/Beranda';
import Error from './pages/Error';
import InfoCalon from './pages/InfoCalon';
import Terimakasih from './pages/Terimakasih';
import Tentang from './pages/Tentang';
import CekStatus from './pages/CekStatus';
import Header from './components/Header/header';
import Footer from "./components/Footer/footer";

import './index.css';
import GoToTop from "./components/GoToTop/goToTop";
import Vote from "./pages/Vote";
import { useContext } from "react";
import { StateContext } from "./components/Context/context";

function App() {
  const {profile} = useContext(StateContext)
  console.log(profile)

  return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Beranda />} />
            <Route exact path="*" element={<Error />} />
            <Route exact path="/info-calon" element={<InfoCalon />} />
            <Route exact path="/terimakasih" element={<Terimakasih />} />
            <Route exact path="/tentang" element={<Tentang />} />
            <Route exact path="/vote" element={<Vote />} />
            <Route exact path="/cek-status" element={<CekStatus />} />
          </Routes>
          <GoToTop />
          <Footer />
        </Router>
      </>
  );
}

export default App;
