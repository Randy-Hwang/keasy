import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mission from './components/Mission';
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
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
