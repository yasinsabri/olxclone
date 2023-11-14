import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <div className="text-center modal-btns">
            <button>Continue with Google</button>
            <button>Continue with Facebook</button>
            <button>Continue with Email</button>
            <button>Continue with Phone</button>
          </div>
          <div className="text-center pt-4 modal-end">
            <p>
              By continuing, you are accepting <br/> OLX Terms of use and Privacy
              Policy
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
