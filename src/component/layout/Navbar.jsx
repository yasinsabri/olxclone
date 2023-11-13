import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg mx-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="asset/download (3).svg" alt="" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <img src="asset/download (4).svg" alt="" />
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/">
                  <img src="asset/download (5).svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg mx-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="asset/olxlogo.svg"
              alt=""
              className="logo"
              width="70"
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-4">
              <form className="d-flex" role="search">
                <input
                  className="form-control nav-search me-2"
                  type="search"
                  placeholder="PAKISTAN"
                  aria-label="Search"
                />
              </form>
              <form className="d-flex" role="search">
                {/* <input
                  className="form-control nav-search1 me-2"
                  type="search"
                  placeholder="Find Cars, Mobile Phone and more..."
                  aria-label="Search"
                /> */}
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control nav-search1"
                    placeholder="Find Cars, Mobile Phone and more..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span
                    className="input-group-text nav-search1-end"
                    id="basic-addon2"
                  ></span>
                </div>
              </form>
              <li className="nav-item mx-3">
                <a className="nav-link login-text" href="/">
                  Login
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link sell-image " href="/">
                  <img src="asset/color.svg" alt="" className="w-100 " />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid mx-4">
        <div className="row">
          <div className="col-sm-12">
            <div className="d-flex flex-wrap  gap-3 nav-end ">
              <h6>All categories</h6>
              <a href="/">Mobile Phones</a>
              <a href="/">Cars</a>
              <a href="/">Motorcycles</a>
              <a href="/">Houses</a>
              <a href="/">TV-Video-Audio</a>
              <a href="/">Tablets</a>
              <a href="/">Lands&Plots</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
