import { useState } from "react";

import AccountBtn from "./accountBtn.jsx";
import MyInfo from "./MyInfo.jsx";
import Coupons from "./Coupons.jsx";
import MyOrders from "./MyOrders.jsx";

import { useSession } from "../../stores/useSessions.js";

import "./accountStyles.css";

const Account = () => {
  const { user } = useSession();

  const [tab, setTab] = useState("info");

  let element = null;

  switch (tab) {
    case "info":
      element = <MyInfo user={user} />;
      break;
    case "coupons":
      element = <Coupons />;
      break;
    case "orders":
      element = <MyOrders />;
      break;
    default:
      break;
  }

  const showTab = (tabName) => {
    setTab(tabName);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex gap-3">
        <div>
          <img
            className="profile-picture"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
            alt="User profile picture"
          ></img>
          <span className="camera-span">
            <i className="bi bi-camera"></i>
          </span>
        </div>
        <div className="mt-3 d-flex flex-column">
          <h3>{user.firstname}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      <hr />
      <div className="mt-5 row gap-2 d-flex justify-content-center justify-content-md-start">
        <AccountBtn
          onClick={() => showTab("info")}
          title="My Info"
          icon={<i className="bi bi-person"></i>}
          btnId={"info"}
        ></AccountBtn>
        <AccountBtn
          onClick={() => showTab("coupons")}
          title="Coupons"
          icon={<i className="bi bi-ticket-perforated"></i>}
          btnId={"coupons"}
        ></AccountBtn>
        <AccountBtn
          onClick={() => showTab("orders")}
          title="My orders"
          icon={<i className="bi bi-card-list"></i>}
          btnId={"myorders"}
        ></AccountBtn>
      </div>
      {element}
    </div>
  );
};

export default Account;
