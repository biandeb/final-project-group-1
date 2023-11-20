import React from "react";
import ReactDOM from "react-dom/client";

//Importaciones de librerias
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

//Importaciones de componentes nuestros
import NavBarMain from "./commos/navBar/NavBarMain";





//importaciones de estilos
import "./index.css";
import RegisterViews from "./views/RegisterViews";





const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
       <NavBarMain></NavBarMain>
        <main>
        <Routes>
        <Route
            path='/register'
            element={<RegisterViews/>}
          />
        </Routes>
        </main>
        
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
