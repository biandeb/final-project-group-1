import React from "react";
import ReactDOM from "react-dom/client";

//Importaciones de librerias
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster } from "sonner";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

//Importaciones de componentes nuestros

import NavBarMain from "./commos/navBar/NavBarMain";
import Footer from "./commos/footer/Footer.jsx";
import RegisterViews from "./views/RegisterViews";
import LoginViews from "./views/LoginViews";

import ErrorView from "./views/ErrorView.jsx";
import AboutUs from "./views/AboutUs.jsx";
import Contact from "./views/Contact.jsx";

//importaciones de estilos
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavBarMain></NavBarMain>
        <main className="mt-0">
          <Routes>
            <Route path="/register" element={<RegisterViews />} />
            <Route path="/login" element={<LoginViews />} />

            <Route exact path="/error" element={<ErrorView />} />

            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/contact-us" element={<Contact />} />
          </Routes>
          <Toaster position="top-right" richColors />
        </main>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
