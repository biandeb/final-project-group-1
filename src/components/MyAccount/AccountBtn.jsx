const AccountBtn = (props) => {
  const { title, icon, btnId, handleClick } = props;


  return (
    <>
      <div  onClick={() => handleClick(btnId)} className="btn col-2 border d-flex flex-column justify-content-center align-content-even">
        <div>{icon}</div>
        <p className="btn-title">{title}</p>
      </div>
    </>
  );
};

export default AccountBtn;
