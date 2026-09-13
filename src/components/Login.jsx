import React from 'react'

const Login = () => {
  return (
    <div className="container login-container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Login</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter your password" />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login
