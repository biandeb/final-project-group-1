import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";

import { useSession } from "../stores/useSessions";

const LogoutBtn = () => {
  const { isLoggedIn, logout } = useSession();

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Attention",
      text: "You're about to log out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        toast.success("Session ended succesfully. Bye!");
        logout();

        navigate("/login");
      }
    });
  };

  return (
    <div className="d-lg-none">
      {!isLoggedIn ? (
        <Link to="/login">
          <div className="text-center ms-5">
            <i className="bi bi-box-arrow-in-right text-dark fs-2"></i>
          </div>
        </Link>
      ) : (
        <div className="text-center ms-5 mb-1">
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default LogoutBtn;
