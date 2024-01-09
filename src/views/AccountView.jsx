import Account from "../components/MyAccount/Account";
import LogoutBtn from "../commons/LogoutBtn.jsx";

import "../index.css";
import "../components/MyAccount/accountStyles.css";

const AccountView = () => {
 
  return (
    <div className="mb-5 pb-5 mt-3 ">
        <LogoutBtn />
      <h1 className="fs-1 fw-bold py-5 text-center">Grill & Thrill</h1>
      <h5 className=" fw-bold lead  text-center">My info</h5>
      <div className="d-flex justify-content-end me-5">
      </div>

      <div className="container-fluid mt-5 pt-5">
        <Account />
      </div>
    </div>
  );
};

export default AccountView;
