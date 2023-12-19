import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid custom-img-height" // Add a custom class
            src="./assets/main.png.jpg"
            alt="Card"
            height="400" // Set the height attribute directly
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h1 className="card-title font-weight-bold" >New Season Arrivals at 50% off</h1>
              <p className="card-text fs-3 d-none d-sm-block font-weight-2">
                This is a wider card with supporting text below as a natural<br></br>
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
