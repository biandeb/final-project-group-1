
import "./registerStyle.css";

const Register = () => {
  return (
    <>
    <section className="container">

<article className="card o-hidden border-0 shadow-lg my-5">
    <div className="card-body p-0">
        
        <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
                <div className="p-5">
                    <div className="text-center fw-bold">
                        <h1 className=" h5 fw-bold mb-4 h1Color">Create new account</h1>
                    </div>
                    <form className="user">
                        
                        <fieldset className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                    placeholder="First Name"/>
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                    placeholder="Last Name"/>
                            </div>
                        </fieldset>
                        <fieldset className="form-group">
                            <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Email Address"/>
                        </fieldset>
                        <fieldset className="form-group ">
                            
                                <input type="password" className="form-control form-control-user"
                                    id="exampleInputPassword" placeholder="Password"/>
                            
                        </fieldset>
                        <a href="login.html" className="btn btn-primary button btn-user btn-block">
                            Sing Up
                        </a>
                        <hr/>
                       
                    </form>
                    <hr/>
                   
                    <div className="text-center">
                        <p className="small">Already have an account?<a  href="#" className="fw-bolder"> Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</article>

</section>
    </>
  )
}

export default Register