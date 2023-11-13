import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid mx-4 pt-5 ">
        <div className="row">
          <div className="col-sm-4">
            <div>
              <img src="asset/footer-img.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="pt-4">
              <h1>TRY THE OLX APP</h1>
              <h4 className="pt-3">
                Buy, sell and find just about anything using the app on your
                mobile.
              </h4>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="pt-5">
              <h6>GET YOUR APP TODAY</h6>
            </div>
            <div className="d-flex flex-wrap gap-2 pt-2 ">
              <img src="asset/appgallery.svg" alt="" className="w-25" />
              <img src="asset/google.svg" alt="" className="w-25" />
              <img src="asset/apple.svg" alt="" className="w-25" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-end">
        <div className="container-fluid mx-4 pt-1">
          <div className="row">
            <div className="col-sm-9">
              <div className="d-flex flex-wrap gap-5">
                <div className="footer-details">
                  <h6>POPULAR CATEGORIES</h6>
                  <p>Cars</p>
                  <p>Flats For Rent</p>
                  <p>Mobile Phones</p>
                  <p>Jobs</p>
                </div>
                <div className=" footer-details mx-5">
                  <h6>TREDNING SEARCHES</h6>
                  <p>Bikes</p>
                  <p>Watches</p>
                  <p>Books</p>
                  <p>Dogs</p>
                </div>
                <div className="footer-details mx-5">
                  <h6>ABOUT US</h6>
                  <p>About Dublizee Group</p>
                  <p>OLX blogs</p>
                  <p>Contact Us</p>
                  <p>OLX for business</p>
                </div>
                <div className="footer-details mx-5">
                  <h6>OLX</h6>
                  <p>Help</p>
                  <p>Sitemap</p>
                  <p>Terms of Use</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <h6>FOLLOW US</h6>
              <div className="d-flex flex-wrap gap-2">
                <img src="asset/twitter.svg" alt="" className="footer-icons" />
                <img src="asset/facebook.svg" alt="" className="footer-icons" />
                <img src="asset/youtube.svg" alt="" className="footer-icons" />
                <img
                  src="asset/instagram.svg"
                  alt=""
                  className="footer-icons"
                />
              </div>
              <div className="d-flex flex-wrap gap-2 pt-2 ">
                <img src="asset/appgallery.svg" alt="" className="w-25" />
                <img src="asset/google.svg" alt="" className="w-25" />
                <img src="asset/apple.svg" alt="" className="w-25" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid color-end">
        <div className="row">
          <div className="col-sm-12 text-end pt-3">
            <h6>Free Classified in Pakistan . c 2006-2023 OLX</h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
