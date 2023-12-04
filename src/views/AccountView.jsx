import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";

import { useSession } from "../stores/useSessions.js";
import Account from "../components/MyAccount/Account.jsx";

import "../components/MyAccount/accountStyles.css";
import "../index.css";

const AccountView = () => {
  const { logout } = useSession();

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Warning",
      text: "You are about to log out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, sign off",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        toast.success("Session closed successfully. See you later!");
        logout();

        navigate("/login");
      }
    });
  };

  return (
    <div className="container-fluid mt-5 pt-5">
      <Account />

      <div className="me-4 d-flex justify-content-end">
        <button
          onClick={handleLogout}
          className="btn w-100 bg-danger text-light m-4 btn-signout"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default AccountView;
