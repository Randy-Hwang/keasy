import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cafe from './pages/Cafe';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import Onboard from './pages/Onboard';
import OrderPage from './pages/Order';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/cafe/coffee" element={<OrderPage />} />
        <Route path="/cafe/juice" element={<OrderPage />} />
        <Route path="/cafe/tea" element={<OrderPage />} />
        <Route path="/cafe/ade" element={<OrderPage />} />
        <Route path="/cafe/dessert" element={<OrderPage />} />
        {/* <Route path="/foodcourt" element={<Mission />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
