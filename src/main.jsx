import React from "react";
import ReactDOM from "react-dom/client";

//Importaciones de librerias
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

//Importaciones de componentes nuestros
import NavBarMain from "./commos/navBar/navBarMain";
import ErrorView from "./views/ErrorView";
import AboutUs from "./views/AboutUs";



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
        <Route exact path='/error' element={<ErrorView />} />
        <Route exact path='/about-us' element={<AboutUs />} />
        </Routes>
        </main>
      </BrowserRouter>
      <Toaster position='top-right' richColors />
    </QueryClientProvider>
  </React.StrictMode>
);
