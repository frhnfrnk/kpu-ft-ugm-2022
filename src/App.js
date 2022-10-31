import './App.css';
import { Routes , Route, BrowserRouter as Router } from "react-router-dom";
import Beranda from './pages/Beranda';
import Error from './pages/Error';
import InfoCalon from './pages/InfoCalon';
import Terimakasih from './pages/Terimakasih';
import Tentang from './pages/Tentang';
import Header from './components/Header/header';


function App() {
  return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/error" element={<Error />} />
            <Route path="/info-calon" element={<InfoCalon />} />
            <Route path="/terimakasih" element={<Terimakasih />} />
            <Route path="/tentang" element={<Tentang />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
