import AccountBtn from "./accountBtn";
import "./accountStyles.css";
import MyInfo from "./MyInfo";
import Coupons from "./Coupons";
import MyOrders from './MyOrders';
import { useState } from "react";

const Account = (props) => {
  const { users } = props;

  const userId = 1;

  const user = users.find((user) => user.id === userId);
  console.log(user);

  //USE STATE para cambiar componente hijo o tab

  const [tab, setTab] = useState(() => <MyInfo user={user} />);

  const showTab = (component) => {
    setTab(component);
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

      <div className="mt-5 row gap-2 d-flex justify-content-center">
        <AccountBtn
          onClick={() => showTab(<MyInfo user={user}/>)}
          title="My Info"
          icon={<i className="bi bi-person"></i>}
          btnId={"info"}
        ></AccountBtn>
        <AccountBtn
          onClick={() => showTab(<Coupons />)}
          title="Coupons"
          icon={<i className="bi bi-ticket-perforated"></i>}
          btnId={"coupons"}
        ></AccountBtn>
        <AccountBtn
          onClick={() => showTab(<MyOrders />)}
          title="My orders"
          icon={<i className="bi bi-card-list"></i>}
          btnId={"myorders"}
        ></AccountBtn>
      </div>
      {/* Renderizo el componente hijo seleccionado */}
      {tab}
    </div>
  );
};

export default Account;
