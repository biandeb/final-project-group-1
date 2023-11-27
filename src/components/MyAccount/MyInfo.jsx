import { useState } from "react";

import UserForm from  "./UserForm"

const MyInfo = (props) => {

    const {user} = props;   
    console.log(user) 

    const [isEditing, setIsEditing] = useState(false);

  //HANDLERS

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <UserForm user={user} onCancel={() => setIsEditing(false)} />
      ) : (
        <div>
          <h5>My personal information</h5>
          <p>Name: {user.firstname}</p>
          <p>Lastname: {user.lastname}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleEdit}>Edit</button>
          <button>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default MyInfo;
