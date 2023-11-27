import React from "react";
import ReactDOM from "react-dom/client";

//Importaciones de librerias
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";




import { Toaster } from "sonner";


//importaciones de estilos
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";


//Importaciones de componentes nuestros

import NavBarMain from "./commos/navBar/NavBarMain";
import RegisterViews from "./views/RegisterViews";
import LoginViews from "./views/LoginViews";


import ErrorView from "./views/ErrorView.jsx";
import AboutUs from "./views/AboutUs.jsx";
import Contact from "./views/Contact.jsx";
import OrderView from "./views/OrderView.jsx";
import CheckoutView from "./views/CheckoutView.jsx";
import OrderStatus from "./views/OrderStatus.jsx";



//importaciones de estilos
import "./index.css";
import AdminViews from "./views/AdminViews.jsx";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>

       <NavBarMain></NavBarMain>
        <main className="mt-0">
        <Routes>
       
        <Route
            path='/register'
            element={<RegisterViews/>}
          />
          <Route
            path='/login'
            element={<LoginViews/>}
          />

        <Route exact path='/error' element={<ErrorView />} />
        
        <Route exact path='/about-us' element={<AboutUs />} />
        <Route exact path='/order' element={<OrderView />} />
        <Route exact path='/checkout' element={<CheckoutView />} />
        <Route exact path='/orderstatus' element={<OrderStatus />} />
        <Route exact path='/contact-us' element={<Contact />} />


        </Routes>
        <Toaster position='top-right' richColors />
        </main>
      </BrowserRouter>
      <Toaster position='top-right' richColors/>

    </QueryClientProvider>
  </React.StrictMode>
);
