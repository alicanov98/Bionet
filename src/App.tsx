import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProjectsPage from "pages/ProjectsPage";
import HeaderComponent from "components/HeaderComponent";
import Footer from "components/Footer";
import ServicesPage from "pages/ServicesPage";
import AboutPage from "pages/AboutPage";
import ContactsPage from "pages/ContactsPage";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectsPage" element={<ProjectsPage />} />
        <Route path="/servicesPage" element={<ServicesPage />} />
        <Route path="/aboutPage" element={<AboutPage/>} />
        <Route path="/contactsPage" element={<ContactsPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
