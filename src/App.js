import { Routes , Route, BrowserRouter as Router } from "react-router-dom";
import Beranda from './pages/Beranda';
import Error from './pages/Error';
import InfoCalon from './pages/InfoCalon';
import Terimakasih from './pages/Terimakasih';
import Tentang from './pages/Tentang';
import CekStatus from './pages/CekStatus';
import Header from './components/Header/header';
import Footer from "./components/Footer/footer";

import './index.css';
import { StateProvider } from "./components/Context/context";
import GoToTop from "./components/GoToTop/goToTop";
import Vote from "./pages/Vote";

function App() {
  return (
      <>
        <Router>
          <StateProvider>
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
          </StateProvider>
        </Router>
      </>
  );
}

export default App;
