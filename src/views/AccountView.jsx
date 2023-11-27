import { useQuery } from "@tanstack/react-query";
import Account from "../components/MyAccount/Account";
import "../index.css";
import { getUsersFn } from "../api/users";

const AccountView = () => {
  //traer todos los usuarios
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersFn,
  });

  console.log(users);

  return (
    <div className="mt-5 pt-5">
      {isLoading ? <h3>Loading...</h3> : <Account users={users} />}
    </div>
  );
};

export default AccountView;
