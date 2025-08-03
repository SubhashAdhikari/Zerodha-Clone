import React from "react";
import "./signup.css"; // Optional, for custom styles

function Signup() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* LEFT SIDE: Image/Illustration */}
        <div className="col-md-6 mb-4">
          <img
            src="/media/images/signup.png" // Use actual image or illustration
            className="img-fluid"
            alt="Platform preview"
          />
        </div>

        {/* RIGHT SIDE: Signup form */}
        <div className="col-md-6">
          <h2 className="fw-semibold mb-2">
            Open a free demat and trading account online
          </h2>
          <p className="text-muted mb-4">
            Start investing brokerage free and join a community of 1.6+ crore investors and traders
          </p>

          <div className="card p-4 shadow-sm border">
            <h5 className="mb-3">Signup now</h5>
            <small className="text-muted mb-3 d-block">
              Or track your existing application
            </small>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your mobile number"
              />
            </div>

            <button className="btn btn-primary w-100">Get OTP</button>

            <p className="text-muted mt-3" style={{ fontSize: "0.75rem" }}>
              By proceeding, you agree to the Zerodha <a href="#">terms</a> & <a href="#">privacy policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
