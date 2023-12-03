import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import NavBarMain from "./commos/navBar/NavBarMain";
import RegisterViews from "./views/RegisterViews";
import LoginViews from "./views/LoginViews";
import ErrorView from "./views/ErrorView";
import AboutUs from "./views/AboutUs";
import OrderView from "./views/OrderView";
import CheckoutView from "./views/CheckoutView";
import OrderStats from "./views/OrderStats";
import Contact from "./views/Contact";
import AccountView from "./views/AccountView";
import HomeView from "./views/HomeView";
import Footer from "./commos/footer/Footer";
import AdminViews from "./views/AdminViews";

import { useSession } from "./stores/useSessions";
import DetailsViews from "./views/DetailsViews";

const Router = () => {
  const { user, isLoggedIn } = useSession();
  return (
    <BrowserRouter>
      <NavBarMain></NavBarMain>
      <main className="mt-5">
        <Routes>
          <Route path="/register" element={isLoggedIn ? <Navigate to="/order"></Navigate> : <RegisterViews />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/order"></Navigate> :<LoginViews />} />

          <Route exact path="/error" element={<ErrorView />} />
          <Route exact path="/details/:id" element={<DetailsViews />} />
 
          <Route
            exact
            path="/admin"
            element={
              user?.isAdmin ? <AdminViews /> : <Navigate to="/login"></Navigate>
            }
          />

          <Route exact path="/about-us" element={ !user?.isAdmin ?<AboutUs /> : <Navigate to="/home"></Navigate>} />
          <Route exact path="/order" element={ !user?.isAdmin ? <OrderView /> : <Navigate to="/home"></Navigate>} />
          <Route exact path="/checkout" element={ !user?.isAdmin ? <CheckoutView /> : <Navigate to="/home"></Navigate>} />
          <Route exact path="/orderstatus" element={!user?.isAdmin ? <OrderStats /> : <Navigate to="/home"></Navigate>} />
          <Route exact path="/contact-us" element={!user?.isAdmin ?<Contact /> : <Navigate to="/home"></Navigate>} />
          <Route exact path="/myaccount" element={!user?.isAdmin ?<AccountView /> : <Navigate to="/home"></Navigate>} />
          <Route exact path="/home" element={!user?.isAdmin ?<HomeView /> : <Navigate to="/home"></Navigate>} />
        </Routes>
        <Toaster position="top-right" richColors />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
