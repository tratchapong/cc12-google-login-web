// resource :
// https://codepen.io/rajashekhar90/pen/XWNaapG
import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

function Login() {
  const {login, glogin} = useAuth()
  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const hdlCallbackResponse = (response) => {
    glogin(response.credential)
  }

  useEffect(()=> {
    /* global google */

    google?.accounts.id.initialize({
      client_id: "119443015095-dlq2d66p6lva5bhqlu9ma847pq640mml.apps.googleusercontent.com",
      callback: hdlCallbackResponse
    })

    google?.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )

  },[])
  const hdlChangeInput = e => {
    setInput({...input, [e.target.name] : e.target.value})
  }
  const hdlSubmit = async (e) => {
    try {
      e.preventDefault()
      await login(input)
    } catch (err) {
      alert(err.response.data.message)
    }
  }

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-xs-10 col-lg-8 offset-xs-1 offset-lg-2">
          <h2 className="text-center text-dark ">Login Form</h2>
          {/* <div className="text-center mb-5 text-dark">Made with bootstrap</div> */}
          <div className="card my-3">
            <form className="card-body cardbody-color p-lg-4" onSubmit={hdlSubmit}>
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
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
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5 mb-3 w-100"
                >
                  Login
                </button>
              </div>
            </form>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <div id="signInDiv"></div>
              </div>
              <div
                className="form-text text-center mb-5 text-dark"
              >
                Not Registered?{" "}
                <Link to='/register' className="text-dark fw-bold"> Create an Account</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
