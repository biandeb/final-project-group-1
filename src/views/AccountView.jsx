import Account from "../components/MyAccount/Account";
import LogoutBtn from "../commons/LogoutBtn.jsx";

import "../index.css";
import "../components/MyAccount/accountStyles.css";

const AccountView = () => {
  // const { logout } = useSession();

  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   Swal.fire({
  //     title: "Attention",
  //     text: "You are about to log out",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes, log out",
  //     cancelButtonText: "Cancel",
  //   }).then((res) => {
  //     if (res.isConfirmed) {
  //       toast.success("Session closed successfully. See you later!");
  //       logout();

  //       navigate("/login");
  //     }
  //   });
  // };

  return (
    <div className="mb-5 pb-5">
      <div className="d-flex justify-content-end me-5">
        <LogoutBtn />
      </div>

      <div className="container-fluid mt-5 pt-5">
        <Account />
      </div>
    </div>
  );
};

export default AccountView;
