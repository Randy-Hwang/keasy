import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cafe from './pages/Cafe';
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
