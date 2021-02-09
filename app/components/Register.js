import React, {useState, useEffect} from "react";
import PageTemplate from "./PageTemplate";
import Container from './Container'

const initialFormValues = {
  username: '',
  email: '',
  password: ''
}
export default function Register() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = e => {
    
    setFormValues({
      ...initialFormValues,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    const { name, email, password } = formValues;
    const newUser = { name, email, password }
    console.log("Our new user is", newUser)
  }
  return (
    <PageTemplate wide="true" title="Welcome">
        <div className="row align-items-center">
          <div className="col-lg-7 py-3 py-md-5">
            <h1 className="display-3">Remember Writing?</h1>
            <p className="lead text-muted">
              Are you sick of short tweets and impersonal &ldquo;shared&rdquo;
              posts that are reminiscent of the late 90&rsquo;s email forwards?
              We believe getting back to actually writing is the key to enjoying
              the internet again.
            </p>
          </div>
          <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="username-register" className="text-muted mb-1">
                  <small>Username</small>
                </label>
                <input
                  id="username-register"
                  name="username"
                  className="form-control"
                  type="text"
                  placeholder="Pick a username"
                  autoComplete="off"
                  onChange={handleInputChange}
                  value={formValues.username}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email-register" className="text-muted mb-1">
                  <small>Email</small>
                </label>
                <input
                  id="email-register"
                  name="email"
                  className="form-control"
                  type="text"
                  placeholder="you@example.com"
                  autoComplete="off"
                  onChange={handleInputChange}
                  value={formValues.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password-register" className="text-muted mb-1">
                  <small>Password</small>
                </label>
                <input
                  id="password-register"
                  name="password"
                  className="form-control"
                  type="password"
                  placeholder="Create a password"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="py-3 mt-4 btn btn-lg btn-success btn-block"
              >
                Sign up for Queenschat
              </button>
            </form>
          </div>
        </div>
    </PageTemplate>
  );
}
