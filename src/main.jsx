import React from "react";
import ReactDOM from "react-dom/client";

//Importaciones de librerias
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



import { Toaster } from "sonner";

//importaciones de estilos
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

//Importaciones de componentes nuestros


//importaciones de estilos
import "./index.css";
import Router from "./Router";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <Router/>
      <Toaster position="top-right" richColors />

      <BrowserRouter>

      


        </Routes>
        <Toaster position='top-right' richColors />
        </main>
        <Footer />
      </BrowserRouter>
      <Toaster position='top-right' richColors/>
    </QueryClientProvider>
  </React.StrictMode>
);
