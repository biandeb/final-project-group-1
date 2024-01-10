import "./accountStyles.css";

const AccountBtn = (props) => {
  const { title, icon, onClick } = props;

  return (
    <>
      <button
        onClick={onClick}
        className="btn col-3 border d-flex flex-column justify-content-center align-content-even btn-account"
      >
        <div>{icon}</div>
        <p className="btn-title">{title}</p>
      </button>
    </>
  );
};

export default AccountBtn;