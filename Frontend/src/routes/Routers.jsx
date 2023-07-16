import Home from "../pages/Home";
import Serivices from "../pages/Services";
import Login from "../pages/Login";
import Sinup from "../pages/Services";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/Doctordetails";
import { Routes, Route } from "react-router-dom";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/services" element={<Serivices />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Sinup />} />
    </Routes>
  );
}

export default Routers;
