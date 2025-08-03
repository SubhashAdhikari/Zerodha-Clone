import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-md-8">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4"
          />
          <h1 className="mt-4">Invest in everything</h1>
          <p className="lead">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
          <button className="btn btn-primary btn-lg mt-3">Signup Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
