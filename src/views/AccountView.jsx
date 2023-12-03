import Account from "../components/MyAccount/Account";
import "../index.css";
import "../components/MyAccount/accountStyles.css";
// import { getUsersFn } from "../api/users";

const AccountView = () => {
  //traer todos los usuarios
  // const { data: users, isLoading } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: getUsersFn,
  // });

  // console.log(users);

  return (
    <div className="container-fluid mt-5 pt-5">
      <Account />

      <div className="me-4 d-flex justify-content-end">
        <button className="btn w-100 bg-danger text-light m-4 btn-signout">
          Sign out
        </button>
      </div>
    </div>
  );
};

export default AccountView;
