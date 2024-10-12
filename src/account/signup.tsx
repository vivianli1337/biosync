import { Link } from "react-router-dom";
import './index.css';

export default function Signup() {
    return (
        <div id="wd-signup-screen" className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="signup-box bg-white p-5 round-r shadow-lg">
                <h1 className="mb-4 text-center">SIGN UP</h1>
                <form className="d-flex flex-column">
                    <div className="mb-3">
                        <input id="wd-username" placeholder="Username" className="form-control custom-input" />
                    </div>
                    <div className="mb-3">
                        <input id="wd-hospital" placeholder="Hospital" className="form-control custom-input" />
                    </div>
                    <div className="mb-3">
                        <input id="wd-branch" placeholder="Branch" className="form-control custom-input" />
                    </div>
                    <div className="mb-3">
                        <input id="wd-email" placeholder="Email" type="email" className="form-control custom-input" />
                    </div>
                    <div className="mb-3">
                        <input id="wd-address" placeholder="Address" className="form-control custom-input" />
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col">
                            <input id="wd-city" placeholder="City" className="form-control custom-input" />
                        </div>
                        <div className="col">
                            <input id="wd-state" placeholder="State" className="form-control custom-input" />
                        </div>
                        <div className="col">
                            <input id="wd-zipcode" placeholder="Zip Code" className="form-control custom-input" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <input id="wd-password" placeholder="Password" type="password" className="form-control custom-input" />
                    </div>
                    <div className="mb-3">
                        <input id="wd-password-verify" placeholder="Verified Password" type="password" className="form-control custom-input" />
                    </div>
                    <Link to="/content/summary">
                        <button id="wd-signup-btn" className="btn btn-primary w-100 mb-3">
                            Sign Up
                        </button>
                    </Link>
                </form>
                <div className="text-end">
                    <Link id="wd-signin-link" to="/Account/signin">Sign In</Link>
                </div>
            </div>
        </div>
    );
}
