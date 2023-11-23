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
import NavBarMain from "./commos/navBar/NavBarMain";


import ErrorView from "./commos/ErrorView";



//importaciones de estilos
import "./index.css";





const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
       <NavBarMain></NavBarMain>
        <main>
        <Routes>
        <Route exact path='/error' element={<ErrorView />} />
        </Routes>
        </main>
      </BrowserRouter>
      <Toaster position='top-right' richColors />
    </QueryClientProvider>
  </React.StrictMode>
);
