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
import RegisterViews from "./views/RegisterViews";
import LoginViews from "./views/LoginViews";





//importaciones de estilos
import "./index.css";
import { Toaster } from "sonner";





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
          <Route
            path='/login'
            element={<LoginViews/>}
          />
        </Routes>
        <Toaster position='top-right' richColors />
        </main>
        
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
