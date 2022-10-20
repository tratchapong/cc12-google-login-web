import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function Register() {
  const {register} = useAuth()
  const [input,setInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  })

  const hdlChangeInput = e => {
    setInput({...input, [e.target.name] : e.target.value})
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      await register(input)
    }catch (err) {
      alert(err.response.data.message)
    }
  }

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-xs-10 col-lg-8 offset-xs-1 offset-lg-2">
          <h2 className="text-center text-dark ">Register Form</h2>
          {/* <div className="text-center mb-5 text-dark">Made with bootstrap</div> */}
          <div className="card my-3">
            <form className="card-body cardbody-color p-lg-4" onSubmit={hdlSubmit}>
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="150px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={hdlChangeInput}
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={input.password}
                  onChange={hdlChangeInput}
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={hdlChangeInput}
                  placeholder="Confirm Password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={input.phone}
                  onChange={hdlChangeInput}
                  placeholder="Pnone Number"
                />
              </div>
              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="btn btn-primary px-5 mb-5 w-100"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
