import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Onboard from './pages/Onboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
