import Register from "../components/Register/Register";

const RegisterViews = () => {
  return (
    <section className="mt-5">
      <div className="text-center">
        <h1 className="fs-1 fw-bold py-4">Grill & Thrill</h1>
        <p className="lead fs-4">Register new account</p>
      </div>
      <Register></Register>
    </section>
  );
};

export default RegisterViews;
