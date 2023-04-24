//import logo from './logo.svg';
//import Dashboard from '../dashboard/dashboard';
import './login.css';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="wrapper">
      <div className="leftside">
        <h1>Board.</h1>
      </div>
      <div className="rightside">
        <div className="right-center">
          <h2>Sign In</h2>
          <h5>Sign in to your account</h5>
          <div className="social-login">
            <div className="g-sign socsign">
            <img src={process.env.PUBLIC_URL+"google.png"} />
              <p>Sign in with Google</p>
            </div>
            <div className="i-sign socsign">
            <img src={process.env.PUBLIC_URL+"apple 1.png"} />
              <p>Sign in with Apple</p>
            </div>
          </div>
            <form className="formi" action="">
              <label htmlFor="">Email address</label>
              <input type="email" placeholder="Enter your E-mail" name="" id="" />
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Enter you Password" name="" id="" />
              <p href="#">Forgot password</p>

              <button>
              <Link to="/Dashboard" id="xyz">Sign In</Link>
              </button>
            </form>
            <p className="last">Don't have an account?<span> Register here</span></p>
        </div>
      </div>
    </div>

  );
}

export default Login;
