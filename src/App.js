import { Routes , Route, BrowserRouter as Router } from "react-router-dom";
import Beranda from './pages/Beranda';
import Error from './pages/Error';
import InfoCalon from './pages/InfoCalon';
import Terimakasih from './pages/Terimakasih';
import Tentang from './pages/Tentang';
import Header from './components/Header/header';
import Footer from "./components/Footer/footer";

import './index.css';

function App() {
  return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/beranda" element={<Beranda />} />
            <Route exact path="/error" element={<Error />} />
            <Route exact path="/info-calon" element={<InfoCalon />} />
            <Route exact path="/terimakasih" element={<Terimakasih />} />
            <Route exact path="/tentang" element={<Tentang />} />
          </Routes>
          <Footer />
        </Router>
      </>
  );
}

export default App;
