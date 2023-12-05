import Account from "../components/MyAccount/Account";
import "../index.css";
import "../components/MyAccount/accountStyles.css";
import { useSession } from "../stores/useSessions";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "../commos/LogoutBtn";

const AccountView = () => {
  const { logout } = useSession();

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Atención",
      text: "Estás por cerrar tu sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, salir",
      cancelButtonText: "Cancelar",
    }).then((res) => {
      if (res.isConfirmed) {
        toast.success("Sesión cerrada exitosamente. Hasta luego!");
        logout();

        navigate("/login");
      }
    });
  };

  return (
    <>
    <div className="d-flex justify-content-end me-5">
    <LogoutBtn />
    </div>

      <div className="container-fluid mt-5 pt-5">
        <Account />

        {/* <div className="me-4 d-flex justify-content-end">
        <button
          onClick={handleLogout}
          className="btn w-100 bg-danger text-light m-4 btn-signout"
        >
          Sign out
        </button>
      </div> */}
      </div>
    </>
  );
};

export default AccountView;
