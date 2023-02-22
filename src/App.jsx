import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import ExtendedPermit from "./components/ExtendedPermit/ExtendedPermit";
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import OversizeAndOverweight from "./components/OversizeAndOverweight/OversizeAndOverweight";
// import LiveChat from "./components/LiveChat/LiveChat";
import PermitForms from "./components/PermitForms/PermitForms";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/permit" element={<PermitForms />} />
        <Route path="/extended-permit" element={<ExtendedPermit />} />
        <Route path="/oversize-and-overweight-permit" element={<OversizeAndOverweight />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
