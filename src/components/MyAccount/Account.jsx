import { useNavigate } from "react-router";
import AccountBtn from "./accountBtn";
import "./accountStyles.css";
import MyInfo from "./MyInfo";


const Account = (props) => {

  const {users} = props;

  const userId = 1;

  const user = users.find((user) => user.id === userId);
  console.log(user);


  // //RRD
  const navigate = useNavigate();


  const handleClick = (btnId) => {
    if (btnId !== "info") {
      navigate("/error")}
    console.log('click en el boton')
    }

    return (
      <div className="container-fluid">
        <div className="d-flex justyfy-content-cent gap-3">
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

        <div className="row gap-1">
          <AccountBtn
            handleClick={handleClick}
            title="My Info"
            icon={<i className="bi bi-person"></i>}
            btnId={"info"}
          ></AccountBtn>
          <AccountBtn
            handleClick={handleClick}
            title="Coupons"
            icon={<i className="bi bi-ticket-perforated"></i>}
            btnId={"coupons"}
          ></AccountBtn>
          <AccountBtn
            handleClick={handleClick}
            title="My orders"
            icon={<i className="bi bi-card-list"></i>}
            btnId={"myorders"}
          ></AccountBtn>
          <AccountBtn
            handleClick={handleClick}
            title="Favourites"
            icon={<i className="bi bi-heart"></i>}
            btnId={"fav"}
          ></AccountBtn>
        </div>
        <MyInfo user={user}/> 
      </div>
    );
  };

export default Account;
