import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cafe from './pages/Cafe';
import CafeOrderPage from './pages/CafeOrder';
import FinishPage from './pages/Finish';
import FoodCourt from './pages/FoodCourt';
import FoodCourtOrderPage from './pages/FoodCourtOrder';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import Onboard from './pages/Onboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/cafe/coffee" element={<CafeOrderPage />} />
        <Route path="/cafe/juice" element={<CafeOrderPage />} />
        <Route path="/cafe/tea" element={<CafeOrderPage />} />
        <Route path="/cafe/ade" element={<CafeOrderPage />} />
        <Route path="/cafe/dessert" element={<CafeOrderPage />} />
        <Route path="/foodcourt" element={<FoodCourt />} />
        <Route path="/foodcourt/korean" element={<FoodCourtOrderPage />} />
        <Route path="/foodcourt/japanese" element={<FoodCourtOrderPage />} />
        <Route path="/foodcourt/western" element={<FoodCourtOrderPage />} />
        <Route path="/foodcourt/beverages" element={<FoodCourtOrderPage />} />
        <Route path="/finish" element={<FinishPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
