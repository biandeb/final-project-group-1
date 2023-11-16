import React from "react";
import ReactDOM from "react-dom/client";

//Importaciones de librerias
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
//Importaciones de componentes nuestros
import NavBar from "./commos/NavBar";

//importaciones de estilos
import "./index.css";
import { Prueba } from "./components/Prueba";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <main>
        <Prueba/>
        <Routes></Routes>
        </main>
        <NavBar />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
