import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function Signin() {
    return (
        <div id="signin-screen" className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="signin-box bg-white p-5 round-r shadow-lg text-center">
                <h1 className="mb-4">LOG IN</h1>
                <form className="d-flex flex-column align-items-center w-100">
                    <div className="mb-3 w-100">
                        <input
                            id="username"
                            className="form-control"
                            placeholder="username"
                        />
                    </div>
                    <div className="mb-3 w-100">
                        <input
                            id="password"
                            className="form-control"
                            placeholder="password"
                            type="password"
                        />
                    </div>
                    <Link to="/content/summary">
                    <button className="btn btn-secondary w-100 mb-3">
                        LOG IN
                    </button>
                    </Link>
                </form>
                <div className="signup-link text-end">
                    <Link id="signup-link" to="/account/signup">
                        sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}