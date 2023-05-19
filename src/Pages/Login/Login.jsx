import  { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const{logIn , googleSignIn} = useContext(AuthContext)
    const handleSignIn =event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    const handleGoogleLogIn = () =>{
      googleSignIn()
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser)
      })
      .catch(error =>{
        console.log(error.message)
      })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
       
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
            
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>Dont have an account? Please<Link to='/register' className="font-bold text-blue-600">Register</Link></p>
            <button onClick={handleGoogleLogIn} className="btn btn-dark">Sign With Google</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
