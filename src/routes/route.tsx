import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import EditContactPage from "../pages/EditContactpage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterContactPage from "../pages/RegisterContactPage";
import RegisterPage from "../pages/RegisterPage";

const RouteMain = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contact" element={<RegisterContactPage />} />
          <Route path="editContact" element={<EditContactPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Navigate replace to={"/"} />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default RouteMain;
