import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import PermitForms from './components/PermitForms/PermitForms';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/permit" element={<PermitForms />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
  );
}

export default App;
