import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

function LoginModal() {
  const [show, setShow] = useState(false);
  const [loginEmail, setLoginEmail] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    // Add your email validation logic here
    // For example, checking if it's a valid email address
    if (!email.includes("@")) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    // Add your password validation logic here
    // For example, checking if it meets certain criteria
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleNextClick = () => {
    // Validate email and password
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // If both email and password are valid, proceed to the next step
    if (isEmailValid && isPasswordValid) {
      // Add your logic for the next step here
      console.log("Email and Password are valid");
    }
  };

  return (
    <React.Fragment>
      <Button variant="primary" className="login-btn" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="text-center pt-5">
            <img src="asset/olxlogo.svg" alt="" className="logoo" />
            <h6 className="pt-3 modal-heading">WELCOME TO OLX</h6>
            <p className="pt-2 modal-desc">
              The trusted community of buyers and sellers.
            </p>
          </div>
          {loginEmail ? (
            <div className="">
              <div className=" email-info d-flex gap-5">
                <p>EMAIL</p>
                <input
                  type="email"
                  name=""
                  id=""
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </div>
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              <div className=" email-info d-flex gap-4 pt-2">
                <p>Password</p>
                <input
                  type="password"
                  name=""
                  id=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
              <div className=" next-btn pt-3 text-center  ">
                <button onClick={() => setLoginEmail(false)}>Back</button>
                <button onClick={handleNextClick}>NEXT</button>
              </div>
            </div>
          ) : (
            <div className="text-center modal-btns">
              <button>Continue with Google</button>
              <button>Continue with Facebook</button>
              <button onClick={() => setLoginEmail(true)}>
                Continue with Email
              </button>
              <button>Continue with Phone</button>
            </div>
          )}
          <div className="text-center pt-4 modal-end">
            <p>
              By continuing, you are accepting <br /> OLX Terms of use and
              Privacy Policy
            </p>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </React.Fragment>
  );
}

export default LoginModal;
