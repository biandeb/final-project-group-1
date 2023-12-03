import { useState } from "react";

import UserForm from "./UserForm";

const MyInfo = (props) => {
  const { user } = props;

  const [isEditing, setIsEditing] = useState(false);

  const handleCancel = () => {
    setIsEditing(false);
  };

  //HANDLERS

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="mt-5 mb-5">
      {isEditing ? (
        <div className="d-flex flex-column justify-content-center">
          <UserForm
            user={user}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
          <button
            onClick={handleCancel}
            className="w-50 align-self-center mt-4 btn-cancel"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="info-container">
          <h5 className="mb-4">My personal information</h5>
          <p>Name: {user.firstname}</p>
          <p>Lastname: {user.lastname}</p>
          <p>Email: {user.email}</p>

          <button onClick={handleEdit} className="btn-edit">
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default MyInfo;
