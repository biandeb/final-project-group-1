import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import NavBarMain from "./commons/navBar/NavBarMain";
import RegisterViews from "./views/RegisterViews";
import LoginViews from "./views/LoginViews";
import ErrorView from "../src/commons/ErrorView.jsx";
import AboutUs from "./views/AboutUs";
import OrderView from "./views/OrderView";
import CheckoutView from "./views/CheckoutView";
import OrderStatus from "./views/OrderStatus";
import Contact from "./views/Contact";
import AccountView from "./views/AccountView";
import HomeView from "./views/HomeView";
import Footer from "./commons/footer/Footer";
import AdminViews from "./views/AdminViews";
import StatsView from "./views/StatsView";

import { useSession } from "./stores/useSessions";
import DetailsViews from "./views/DetailsViews";

const Router = () => {
  const { user, isLoggedIn } = useSession();

  return (
    <BrowserRouter>
      <NavBarMain></NavBarMain>
      <main className="">
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route
            path="/register"
            element={
              isLoggedIn && user.isAdmin === false? <Navigate to="/order"></Navigate> : <RegisterViews />
            }
          />
          <Route
            path="/login"
            element={
              isLoggedIn && user.isAdmin===false? <Navigate to="/order"></Navigate> : <LoginViews />
            }
          />

          <Route exact path="/error" element={<ErrorView />} />
          <Route exact path="/details/:id" element={<DetailsViews />} />

          <Route
            exact
            path="/admin"
            element={
              user?.isAdmin ? <AdminViews /> : <Navigate to="/login"></Navigate>
            }
          />

          <Route exact path="/about-us" element={<AboutUs />} />
          <Route
            exact
            path="/order"
            element={
              !user?.isAdmin ? <OrderView /> : <Navigate to="/login"></Navigate>
            }
          />
          <Route exact path="/checkout" element={<CheckoutView />} />
          <Route
            exact
            path="/orderstatus"
            element={
              isLoggedIn ? <OrderStatus /> : <Navigate to="/login"></Navigate>
            }
          />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route
            exact
            path="/myaccount"
            element={
              isLoggedIn ? <AccountView /> : <Navigate to="/login"></Navigate>
            }
          />
          <Route
            exact
            path="/stats"
            element={
              isLoggedIn ? <StatsView /> : <Navigate to="/login"></Navigate>
            }
          />

        </Routes>
        <Toaster position="top-right" richColors />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
