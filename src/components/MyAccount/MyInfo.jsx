import { useState } from "react";

import UserForm from "./UserForm";
import PasswordForm from "./PasswordForm";
import Button from "../Button/Button";

const MyInfo = (props) => {
  const { user } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const handleCancel = () => {
    setIsEditing(false);
    setIsEditingPassword(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditPassword = () => {
    setIsEditingPassword(true);
  };

  if (isEditingPassword) {
    return (
      <div className="mt-5 mb-5">
        <h5>Reset your password</h5>
        <p>
          Your new password must have at least one number, one lowercase letter,
          one uppercase letter,one special character and at least 8 characters
        </p>
        <PasswordForm
          user={user}
          setIsEditingPassword={setIsEditingPassword}
          isEditingPassword={isEditingPassword}
        />
        <button
          onClick={handleCancel}
          className="w-50 align-self-center mt-4 btn-cancel"
        >
          Cancel
        </button>
      </div>
    );
  }

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
        <div className="info-container card o-hidden border-0 shadow-lg">
          <div className="mx-3 mt-2">

          <h5 className="mb-4 fw-bolder"> MY PERSONAL INFORMATION</h5>
          <p>Name: {user.firstname}</p>
          <p>Lastname: {user.lastname}</p>
          <p>Email: {user.email}</p>

          <div className="d-flex gap-3 mb-3">
            <Button
              title={"Edit"}
              onClick={handleEdit}
              className="btn-success"
              ></Button>
            <Button
              title={"Reset password"}
              onClick={handleEditPassword}
              className="btn-success"
              ></Button>
          </div>
              </div>
        </div>
      )}
    </div>
  );
};

export default MyInfo;
