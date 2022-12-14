import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Layout/Footer";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Registrasi from "./pages/Registrasi/Registrasi";
import BabyShop from "./pages/BabyShop/BabyShop";
import Consultation from "./pages/Consultation/Consultation";
import ListKonsultasi from "./pages/List-Konsultasi/ListKonsultasi";
import Keranjang from "./pages/Keranjang/Keranjang";
import Pembayaran from "./pages/Pembayaran/Pembayaran";
import Pemesanan from "./pages/Pemesanan/Pemesanan";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/News" element={<News />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrasi" element={<Registrasi />} />
        <Route path="/BabyShop" element={<BabyShop />} />
        <Route path="/Consultation" element={<Consultation />} />
        <Route path="/ListKonsultasi" element={<ListKonsultasi />} />
        <Route path="/keranjang" element={<Keranjang />} />
        <Route path="/Pembayaran" element={<Pembayaran />} />
        <Route path="/Pemesanan" element={<Pemesanan />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
