import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import NavBarMain from "./commos/navBar/NavBarMain";
import RegisterViews from "./views/RegisterViews";
import LoginViews from "./views/LoginViews";
import ErrorView from "./views/ErrorView";
import AboutUs from "./views/AboutUs";
import OrderView from "./views/OrderView";
import CheckoutView from "./views/CheckoutView";
import OrderStatus from "./views/OrderStatus";
import Contact from "./views/Contact";
import AccountView from "./views/AccountView";
import HomeView from "./views/HomeView";
import Footer from "./commos/footer/Footer";
import AdminViews from "./views/AdminViews";
import StatsView from "./views/StatsView";

import { useSession } from "./stores/useSessions";
import DetailsViews from "./views/DetailsViews";

const Router = () => {
  const { user, isLoggedIn } = useSession();

  return (
    <BrowserRouter>
      <NavBarMain></NavBarMain>
      <main className="mt-5">
        <Routes>
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
          <Route exact path="/order" element={<OrderView />} />
          <Route exact path="/checkout" element={<CheckoutView />} />
          <Route exact path="/orderstatus" element={<OrderStatus />} />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/myaccount" element={<AccountView />} />
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/stats" element={<StatsView />} />
          <Route exact path="/register" element={<RegisterViews />} />
        </Routes>
        <Toaster position="top-right" richColors />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;