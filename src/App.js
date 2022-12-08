import { Routes, Route } from "react-router-dom";
import CoinDetails from "./components/CoinDetails";
import CoinsHeader from "./components/CoinsHeader";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="App bg-[#1A1B1C] text-white pb-2 h-fill">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/coin-details:id" element={<CoinDetails />} />
      </Routes>
    </div>
  );
}

export default App;
